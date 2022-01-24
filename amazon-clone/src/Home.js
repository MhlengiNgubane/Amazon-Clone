import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home_row">
                    <Product 
                        id="12321341"
                        title='Apple iPhone 12 Pro Max, 256GB, Pacific Blue - Unlocked (Renewed Premium)' 
                        price= {1049.00} 
                        image= "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SY200_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="49538094"
                        title='Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB' 
                        price= {399.00} 
                        rating={5}
                        image= "https://m.media-amazon.com/images/I/61kwRNPtMpL._AC_SY200_.jpg"                       
                    />
                </div>

                <div className="home_row">
                    <Product 
                        id="4903850"
                        title='LG 75UP8070PUA 75UP8070PUR 75 Inch Series 4K Smart UHD TV 2021 Bundle with Premium 2 Year Extended Protection Plan' 
                        price= {999.99} 
                        rating={4}
                        image= "https://m.media-amazon.com/images/I/71FW3ssYLoS._AC_UY218_.jpg" 
                    />
                    <Product 
                        id="23445930"
                        title='Sony a7 III (ILCEM3K/B) Full-frame Mirrorless Interchangeable-Lens Camera with 28-70mm Lens with 3-Inch LCD, Black' 
                        price= {2198.00} 
                        rating={5}
                        image= "https://m.media-amazon.com/images/I/91rQ3XfEYzL._AC_UY218_.jpg" 
                    />
                    <Product 
                        id="3254354345"
                        title='Playstation DualSense Wireless Controller' 
                        price= {69.99} 
                        rating={5}
                        image= "https://m.media-amazon.com/images/I/612bjwBuobS._AC_UY218_.jpg" 
                    />
                </div>

                <div className="home_row">
                    <Product 
                        id="90829332"
                        title='Beyond Order: 12 More Rules for Life Hardcover - March 2, 2021' 
                        price= {19.50} 
                        rating={5}
                        image= "https://m.media-amazon.com/images/I/71EYOo8+bfL._AC_UL320_.jpg" 
                    />
                </div>

            </div>
        </div>
    );
}

export default Home;