import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className="home">

            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Banner" />
            </div>

            <div className="home__row">
                <Product
                    id={658224}
                    title="The Lean Starup"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019.jpg"
                    rating={4} />
                <Product
                    id={865420}
                    title="Wireless Headphone"
                    price={56.66}
                    image="https://www.kindpng.com/picc/m/409-4092291_best-headphones-hd-png-download.png"
                    rating={5} />
            </div>

            <div className="home__row">
                <Product
                    id={879334}
                    title="Iphone 11"
                    price={699.99}
                    image="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg"
                    rating={2} />

                <Product
                    id={765221}
                    title="Wishkas Junior"
                    price={8.79}
                    image="https://keytest.org/wp-content/uploads/2021/04/whiskas-junior-mackerel-85g-cat-wet-food.jpg"
                    rating={5} />
                <Product
                    id={900435}
                    title="Grey T-shirt"
                    price={13.50}
                    image="https://www.kindpng.com/picc/m/117-1175092_ash-back-grey-t-shirt-png-transparent-png.png"
                    rating={3} />
            </div>

            <div className="home__row">
                <Product
                    id={745212}
                    title="Accoustic Guitar"
                    price={8.79}
                    image="https://img.audiofanzine.com/images/u/product/normal/fender-player-telecaster-271503.jpg"
                    rating={4} />
            </div>

        </div>
    );
}

export default Home;