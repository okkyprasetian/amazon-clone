import { useContext } from 'react';
import { StateContext } from './Provider'
import './Product.css'

function Product({ id, title, price, image, rating }) {

    const { addToBasket } = useContext(StateContext)

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

            <button onClick={() => addToBasket(id, title, price, image, rating)} >Add item</button>
        </div>
    );
}

export default Product;