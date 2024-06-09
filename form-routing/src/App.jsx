import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import CreateProduct from './pages/CreateProduct'
import Hello from './pages/Hello'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='form' element={<CreateProduct/>}/>

          <Route path='about' element={<About/>}/>

          <Route path='hello' element={<Hello/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
