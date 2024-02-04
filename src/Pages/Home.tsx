import AudioRecorder from '../Components/AudioRecorder'

const CenteredContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
}

const Home = () => {
  return (
    <div style={CenteredContainer}>
      <AudioRecorder />
    </div>
  )
}

export default Home
