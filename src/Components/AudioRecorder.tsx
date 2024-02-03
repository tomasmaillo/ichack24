// import React, { useState, useEffect } from 'react'

// type AudioRecorderProps = {
//   // Define props here if any
// }

// const AudioRecorder: React.FC<AudioRecorderProps> = (props) => {
//   const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
//   const [audioChunks, setAudioChunks] = useState<Blob[]>([])

//   useEffect(() => {
//     // Request access to the microphone
//     async function getMicrophoneAccess() {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
//       const recorder = new MediaRecorder(stream)
//       setMediaRecorder(recorder)

//       recorder.ondataavailable = (event: BlobEvent) => {
//         setAudioChunks((currentChunks) => [...currentChunks, event.data])
//       }
//     }

//     getMicrophoneAccess()

//     return () => {
//     if (mediaRecorder) {
//       mediaRecorder.removeEventListener('stop', yourUploadFunction);
//     }
//   };
//   }, [])

//   const startRecording = () => {
//     if (mediaRecorder) {
//       setAudioChunks([]) // Reset chunks on new recording
//       mediaRecorder.start()
//     }
//   }

//   const stopRecording = () => {
//     if (mediaRecorder) {
//       mediaRecorder.stop()
//     }
//   }

//   const uploadAudio = async (audioBlob: Blob) => {
//     const formData = new FormData()
//     formData.append('file', audioBlob, 'audio.mp3')

//     try {
//       const response = await fetch(
//         'https://b640-2a0c-5bc0-40-3e3c-70c2-eb9e-ee77-1f6.ngrok-free.app/audio_to_text/',
//         {
//           method: 'POST',
//           body: formData,
//         }
//       )

//       if (response.ok) {
//         const data = await response.json()
//         console.log(
//           'Audio file uploaded and transcribed successfully:',
//           data.text
//         )
//         // Handle the response data as needed
//       } else {
//         console.error('Upload failed')
//       }
//     } catch (error) {
//       console.error('Error uploading the file', error)
//     }
//   }

//   mediaRecorder?.addEventListener('stop', async () => {
//     const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' })
//     await uploadAudio(audioBlob)
//   })

//   return (
//     <div>
//       <button onClick={startRecording}>Start Recording</button>
//       <button onClick={stopRecording}>Stop Recording</button>
//       {/* Additional UI for feedback and uploads */}
//     </div>
//   )
// }

// export default AudioRecorder
