import './ProductList.css'
import Product from './Product'
import { useEffect, useState } from 'react'

export default function ProductList() {

    let [products,setProducts] = useState([])

    useEffect(()=>{
      fetch("https://fakestoreapi.com/products",{method:"GET"})
      .then((response)=>{ return response.json() })
      .then((data)=>{setProducts(data)})
      .catch((err)=>{ console.log(err) })
    })

  return (
    <section className='product-list'>
        
    {
        products.map((prod)=>{
          return (
              <Product
                name={prod.title}
                imageUrl={prod.image}
                price={prod.price}
              />
          )
        })
    }

    </section>
  )
}