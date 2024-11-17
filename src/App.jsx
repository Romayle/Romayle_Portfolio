import NavBar from './Components/navBar'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import './index.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='grid gap-4'>
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
