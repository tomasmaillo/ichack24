import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Student from './Pages/Student'

ReactDOM.render(
  <React.StrictMode>
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
