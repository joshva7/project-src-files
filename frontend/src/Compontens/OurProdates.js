import imgs from '../Image/Dogfood.png'
import imgs2 from '../Image/Camera.jpg'
import imgs3 from '../Image/Gaminglaptop.jpg'
import imgs4 from '../Image/Shouse.png'
import imgs5 from '../Image/Wathch.jpg'
import imgs6 from '../Image/T-shirt.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import OruProdateData from './OurProdateData';
import '../CssCompontens/OurProdate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck,faHeadphones,faShieldHalved } from '@fortawesome/free-solid-svg-icons'
const OurProdates = () => {
   const ProdatesData=[
    {
        id:1,
        images:imgs,
        name:"Dogfood",
        price:'$250'
    },
    {
        id:2,
        images:imgs2,
        name:"Camera",
        price:'$550'
    },
    {
        id:3,
        images:imgs3,
        name:"GamingLaptop",
        price:'$600'
    },
    {
        id:4,
        images:imgs4,
        name:"Shoes",
        price:'$200'
    },
     {
        id:5,
        images:imgs5,
        name:"Wathch",
        price:'$950'
    },
    {
        id:6,
        images:imgs6,
        name:"T-shirt",
        price:'$950'
    }
   ]
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const Text = [{
        Title: 'Our Prodates',
        prodate: 'Exploer Our Prodates'
    }]
    return (
        <div>
            <div className="container Ti-box">
                <div>
                    <div className="Ti-timer mt-5">
                        <div className="Ti-Titles"></div>
                        <span className="Ti-date">{Text.map((item) => item.Title)}</span>
                    </div>
                </div>
                <div className='Fs-box-time mt-3'>
                    <span>
                        <h3 className='Ti-H3 Cat-h3'>{Text.map((item) => item.prodate)}</h3>
                    </span>
                </div>
                <Carousel responsive={responsive}>
                  {ProdatesData.map((pro)=> <OruProdateData images={pro.images} name={pro.name} price={pro.price} />)} 
                </Carousel>;
                <div className='probox'>
                    <div>
                        <FontAwesomeIcon icon={faTruck} className='proicon' />
                        <p className="prodatebox">FREE AND FAST DELIVERY</p>
                        <p className='prosubpara'>Free delivery for all orders over $140</p>
                    </div>
                    <div>
                <FontAwesomeIcon icon={faHeadphones} className='proicon'/>
                    <p className="prodatebox">24/7CUSTOMER SERVICE</p>
                    <p className='prosubpara'>Friendly 24/7 customer support</p>
                    </div>
                    <div>
                <FontAwesomeIcon icon={faShieldHalved} className='proicon'/>
                    <p className="prodatebox">MONEY BACK GUARANTEE</p>
                    <p className='prosubpara'>We return money within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProdates