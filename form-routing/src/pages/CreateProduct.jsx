import { useState } from 'react'
import './CreateProduct.css'

export default function CreateProduct() {

    // let [name,setName]=useState("")
    let [product,setProduct] =useState({})

    function handleInput()
    {
        // let copyProduct = {...product}
        // copyProduct[event.target.name]= event.target.value
        // setProduct(copyProduct)

        //easy shorthand
        setProduct({...product,[event.target.name]:event.target.value})
        console.log(product)
    }

    function handleSubmit(){
        event.preventDefault()
        console.log(product)
    }

  return (
    <section className='form-parent'>
        
        <form className='form' onSubmit={handleSubmit}>

        <h1>Add Product</h1>

        {/* {handleInput.bind(this,"name")}  // possibility*/}
        
        <input className='inp' type="text" required name='name' placeholder='Enter Name' onChange={handleInput}/>

        <input className='inp' type="text" name='price' placeholder='Enter Price' onChange={handleInput}/>

        <input className='inp' type="text" name='category' placeholder='Enter Category' onChange={handleInput}/>

        <input className='inp' type="number" name='quantity' placeholder='Enter Quantity' onChange={handleInput}/>

        <input className='inp' type="text" name='description' placeholder='Enter Description' onChange={handleInput}/>


        <button type="submit" className='btn'>ADD</button>
        </form>
    </section>
  )
}