import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './pages/products/Products'
import CreateProduct from './pages/create-product/CreateProduct'
import NotFound from './pages/not-found/NotFound'
import UpdateProduct from './pages/update-product/UpdateProduct'
import ShowProduct from './pages/show-product/ShowProduct'

function App() {

  return (
    <>
      
      <BrowserRouter>

        <Routes>
            <Route path='' element={<Products/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/create" element={<CreateProduct/>}/>
            <Route path='/update/:id' element={<UpdateProduct/>}/>
            <Route path='/card/:id' element={<ShowProduct/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App

