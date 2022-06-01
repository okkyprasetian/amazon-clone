import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StateContext } from './Provider'
import './Header.css'
import { BiSearchAlt2, BiShoppingBag } from 'react-icons/bi'

function Header() {

    // Install global state to local header state
    const { basket } = useContext(StateContext)

    return (
        <div className="header">

            <Link to={'/'}>
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" className="header__logo" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <BiSearchAlt2 size={28} className="header__searchIcon" />
            </div>

            <div className="header__nav">

                <Link to={'/login'}>
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to={'/checkout'} >
                    <div className="header__optionBasket">
                        <BiShoppingBag size={28} className='header__basketIcon' />
                        <span className="optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Header;