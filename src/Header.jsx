import './Header.css'
import { BiSearchAlt2, BiShoppingBag } from 'react-icons/bi'

function Header() {
    return (
        <div className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" className="header__logo" />

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <BiSearchAlt2 size={28} className="header__searchIcon" />
            </div>

            <div className="header__nav">

                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <div className="header__optionBasket">
                    <BiShoppingBag size={28} className='header__basketIcon' />
                    <span className="optionLineTwo header__basketCount">0</span>
                </div>

            </div>
        </div>
    );
}

export default Header;