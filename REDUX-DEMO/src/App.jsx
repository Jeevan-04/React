import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
