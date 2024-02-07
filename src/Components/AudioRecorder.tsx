import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

type AudioRecorderProps = {
  // Props if any
}

const AudioRecorder: React.FC<AudioRecorderProps> = () => {
  const navigate = useNavigate()

  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
  const [audioChunks, setAudioChunks] = useState<Blob[]>([])
  const [transcribedText, setTranscribedText] = useState<string[]>([])
  const [isRecording, setIsRecording] = useState<boolean>(false)
  const [hasAtLeast5SecondsOfAudio, setHasAtLeast5SecondsOfAudio] =
    useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const [totalNumberOfAudioChunks, setTotalNumberOfAudioChunks] =
    useState<number>(0)

  useEffect(() => {
    async function getMicrophoneAccess() {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const recorder = new MediaRecorder(stream)
      setMediaRecorder(recorder)

      recorder.ondataavailable = (event: BlobEvent) => {
        setAudioChunks((currentChunks) => {
          if (currentChunks.length > 10) {
            setHasAtLeast5SecondsOfAudio(true)
          }
          return [...currentChunks, event.data]
        })
      }
    }

    getMicrophoneAccess()

    return () => {
      mediaRecorder?.stream.getTracks().forEach((track) => track.stop())
    }
  }, [])

  const generateQuiz = async () => {
    setIsRecording(false)
    setLoading(true)
    let response = await fetch(
      'https://a00b-94-175-61-189.ngrok-free.app/generate_quiz/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ audio: audioChunks }),
      }
    )
    let data = await response.json()
    console.log(data)
    navigate('/review')
    console.log("Should have navigated")

  }

  useEffect(() => {
    let intervalId: number

    if (isRecording && mediaRecorder) {
      mediaRecorder.start(500)
      intervalId = window.setInterval(() => {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
          mediaRecorder.stop()
          mediaRecorder.start(500)
        }
      }, 10000)
    }

    if (!isRecording && mediaRecorder) {
      mediaRecorder.stop()
    }

    return () => {
      window.clearInterval(intervalId)
    }
  }, [isRecording, mediaRecorder])

  useEffect(() => {
    if (!mediaRecorder) return

    const stopListener = () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' })
      console.log(audioBlob.size)
      setTotalNumberOfAudioChunks(audioChunks.length)
      setAudioChunks((_) => [])
      uploadAudio(audioBlob)
    }

    mediaRecorder.addEventListener('stop', stopListener)

    return () => {
      mediaRecorder.removeEventListener('stop', stopListener)
    }
  }, [mediaRecorder, audioChunks])

  const uploadAudio = async (audioBlob: Blob) => {
    const formData = new FormData()
    formData.append('file', audioBlob, 'audio.mp3')

    try {
      const response = await fetch(
        'https://a00b-94-175-61-189.ngrok-free.app/audio_to_text/',
        {
          method: 'POST',
          body: formData,
        }
      )

      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setTranscribedText((currentText) => [...currentText, data])
      } else {
        console.error('Upload failed')
      }
    } catch (error) {
      console.error('Error uploading the file', error)
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
  }

  return (
    <>
      <StyledAudioRecorder>
        <h2>Lesson recording</h2>

        <h2
          style={{
            opacity: isRecording ? 1 : 0,
            transition: 'opacity 0.2s',
          }}>
          Your lesson is being recorded!
        </h2>
        <StyledButtonAnimated
          onClick={toggleRecording}
          disabled={loading}
          isRecording={isRecording}>
          {isRecording ? '⏸' : '⏵'}
        </StyledButtonAnimated>
        {/* <span
        style={{
          color: '#333333',
        }}>
        {Math.floor((totalNumberOfAudioChunks + audioChunks.length) / 2)}s of
        audio recorded
      </span> */}
        {/* Transcription:
      {transcribedText.map((text, index) => (
        <p key={index}>{text}</p>
      ))} */}
        {hasAtLeast5SecondsOfAudio && (
          <div
            onClick={() => generateQuiz()}
            style={{
              color: '#333333',
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}>
            Finish recording
          </div>
        )}
      </StyledAudioRecorder>
      <GrayLoading
        style={{
          opacity: loading ? 1 : 0,
          transition: 'opacity 0.2s',
        }}>
        <img
          src="https://i.gifer.com/ZKZg.gif"
          alt="loading"
          style={{ width: '25px' }}
        />
      </GrayLoading>
    </>
  )
}

const GrayLoading = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  pointer-events: none;
`

const StyledButtonAnimated = styled.button<{ isRecording: boolean }>`
  padding: 16px;
  background-color: #bc84da;
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
  border: #ad75cc 5px solid;
  cursor: pointer;
  height: 96px;
  width: 96px;
  border-radius: 50%;
  margin: 16px 0;
  transition: background-color 0.2s;

  &:hover {
    background-color: #b693c9;
  }

  animation: ${({ isRecording }) => (isRecording ? breatheAnimation : 'none')}
    3s infinite;
`

const breatheAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`

const StyledAudioRecorder = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  min-width: 350px;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  border: 2px solid #eeeeee;
  position: relative;
`

export default AudioRecorder
