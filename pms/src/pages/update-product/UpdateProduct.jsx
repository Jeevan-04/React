import { useEffect, useState } from "react"
import styles from "./UpdateProduct.module.css"
import { Link, useParams } from "react-router-dom"
import Products from "../products/Products"


export default function UpdateProduct() {


    let [product, setProduct] = useState({})
    let params = useParams()

    useEffect(()=>{
        fetch("http://localhost:3000/products/"+params.id,{method:"GET"})
        .then((Response)=>{return Response.json()})
        .then((data)=>{
            console.log(data)
            setProduct(data)
        })
        .catch((err)=>{console.log(err)})
    },[])

    function handleInput()
    {
        setProduct({...product, [event.target.name]:event.target.value})
    }

    function handleUpdate()
    {
        event.preventDefault()
        fetch("http://localhost:3000/products/"+params.id,{method:"PUT",body:JSON.stringify(product),headers:{"Content-Type":"application/json"}})
        .then((Response)=>{return Response.json()})
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{console.log(err)})
    }

  return (
    <section className={styles.container}>

        <div className={styles.header}>
            <h1 className={styles.container_title}>Update Product</h1>

            <Link to="/products">
                <i className={"fa-solid fa-bars "+styles.createbtn}/>
            </Link>
        </div>

        <form className={styles.form} onSubmit={handleUpdate}>

            <input className={styles.inp} type="text" defaultValue={product.name} required placeholder='Enter Name' name='name'
            onChange={handleInput} 
            />
            <input className={styles.inp} type="text" defaultValue={product.price}  required placeholder='Enter Price' name='price' 
            onChange={handleInput}
            />
            <input className={styles.inp} type="text" defaultValue={product.quantity}  required placeholder='Enter Quantity' name='quantity' 
            onChange={handleInput}
            />
            <input className={styles.inp} type="text" defaultValue={product.imageURL}  required placeholder='Enter Image URL' name='imageURL' 
            onChange={handleInput}
            />
            <input className={styles.inp} type="text" defaultValue={product.category}  required placeholder='Enter Category' name='category' 
            onChange={handleInput}
            />

            <button className={styles.btn} type='submit'>Update</button>

        </form>

    </section>
  )
}
