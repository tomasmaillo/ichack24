import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Student from './Pages/Student'
import Teacher from './Pages/Teacher'
import Review from './Pages/Review'

ReactDOM.render(
  <div
    style={{
      width: '100vw',
      height: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F4F4F4',
    }}>
    <Router basename={'/ichack24'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/review" element={<Review />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </Router>
  </div>,
  document.getElementById('root')
)
