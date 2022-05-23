import './Product.css'

function Product() {
    return (
        <div className="product">

            <div className="product__info">
                <p>The Lean Startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>

            <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019.jpg" alt="product" />

            <button>Add item</button>
        </div>
    );
}

export default Product;