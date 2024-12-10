import { useEffect, useState } from "react"
import '../CssCompontens/PopsHead.css'
import Carousel from 'react-bootstrap/Carousel'
const PopsHeading = () => {
    const [prodlist, setprodlist] = useState([])
     useEffect(() => {
         setprodlist([
             "Woman's Fashion",
             "Men's Fashion",
             "Electronics",
             "Home & LifeStyle",
         "Medicine",
            "Sports & Outdoor",
             "Baby's & Toys",
             "Groceries & Pets",
             "Health & Beauty",
        ])
     }, [])
    return (
        <div className="Pop-Head">
            <div className="HO-Head">
                <div className="Ho-side-title">
                    <ul className="HO-ul">
                        {prodlist.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                </div>
            </div>
            <div>
                <Carousel className='Card-box'>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src="https://www.apple.com/in/iphone-16/images/meta/iphone-16_overview__fcivqu9d5t6q_og.png?202411282311"
                            alt="first slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src="https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/tile/Apple-Watch-S9-hero-230912.jpg.landing-big_2x.jpg"
                            alt="Secound slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src="https://assets2.razerzone.com/images/pnx.assets/3df7902fb78730b5b8ca5a23dcfbfc7a/razer-blade-14-2023-ogimage-1200x630.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src="https://www.apple.com/v/airpods/x/images/overview/pro_endframe__e2wscfy18pme_large.jpg"
                            alt="Four slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default PopsHeading