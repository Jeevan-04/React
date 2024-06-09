import { useEffect, useState } from 'react';
import styles from './ShowProduct.module.css';
import { useParams } from "react-router-dom";

export default function ShowProduct() {
    let [product, setProduct] = useState({});
    let params = useParams();

    useEffect(() => {
        fetch("http://localhost:3000/products/" + params.id, { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
            })
            .catch((err) => console.log(err));
    }, [params.id]);

    return (
        <section className={styles.card_section}>
            <div className={styles.header}>
                <h1>{product.name}</h1>
            </div>
            <div className={styles.section_img}>
                <img src={product.imageURL} alt={product.name} />
            </div>
            <div className={styles.details}>
                <h1>Price: ${product.price}</h1>
                <h1>Category: {product.category}</h1>
                <h1>Quantity: {product.quantity}</h1>
            </div>
        </section>
    );
}
