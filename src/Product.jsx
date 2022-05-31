import { useContext, useState } from 'react';
import { StateContext } from './Provider'
import './Product.css'

function Product({ id, title, price, image, rating }) {

    // Global State
    const { addToBasket } = useContext(StateContext)

    // Local State

    // Count is for make dynamic id, so every time we add new product to basket, it have unique id
    const [count, setCount] = useState(0)
    const addCount = () => {
        setCount(count + 1)
    }

    return (
        <div className="product" key={id}>

            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} alt="product" />

            <button onClick={() => { addToBasket((id + count), title, price, image, rating); addCount() }} >Add item</button>
        </div>
    );
}

export default Product;