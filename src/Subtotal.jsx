import { useContext } from 'react';
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { StateContext } from './Provider';
import './Subtotal.css'

function Subtotal() {

    // Install global state to local state
    const { basket, totalPrice } = useContext(StateContext)

    // Use history
    const history = useHistory()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={totalPrice}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

            <button onClick={() => history.push('/payment')} >Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;

// free bug