import { useContext } from 'react';
import './CheckoutProduct.css'
import { StateContext } from './Provider';

function CheckoutProduct({ id, title, price, image, rating }) {

    // Install global state
    const { removeFromBasket } = useContext(StateContext)

    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct__img' src={image} alt={id} />

            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket(id)} className="checkoutProduct__remove">
                    Remove item
                </button>
            </div>
        </div>
    );
}

export default CheckoutProduct;