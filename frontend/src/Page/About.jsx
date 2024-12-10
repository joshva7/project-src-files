import shopping from '../Image/Shopping.jpg'
import '../CssCompontens/About.css'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck,faHeadphones,faShieldHalved,faShop, faBagShopping, faCircleDollarToSlot, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import emplye_detials from '../Assets/Employe';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
const About = () => {
  const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
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
  const About_box = [
    {
      id: 1,
      price: '10.5k',
      detials: 'Sallers active our site',
      font_icon: <FontAwesomeIcon icon={faShop} />
    },
    {
      id: 2,
      price: '33k',
      detials: 'Mopnthly Produduct Sale',
      font_icon: <FontAwesomeIcon icon={faCircleDollarToSlot} />
    },
    {
      id: 3,
      price: '45.5k',
      detials: 'Customer active in our site',
      font_icon: <FontAwesomeIcon icon={faBagShopping} />
    },
    {
      id: 4,
      price: '25k',
      detials: 'Anual gross sale in our site',
      font_icon: <FontAwesomeIcon icon={faSackDollar} />
    }
  ]
  return (
    <div>
      <div>
      <span className='Cont-link'>
      <Link to='/' className='Cont-link-child-1'>Home</Link>
      <span className='Cont-link-child-1'>/</span>
      <Link to='/Contact' className='Cont-link-child-2'>About</Link>
      </span>
      </div>
      <div className='About_box'>
        <div className='Abou_side'>
          <h1 className='Abou_side_head'>Our Story</h1>
          <p>Launce in 2015,Exclusive is South  Asia's permier online shoping by wide range of tailored marketing,data and service solutions,Exclusive have 10,500 sallers and 300 brands and serves 3 millions customers across the region.</p>
          <p>Exclusive has more than 1 million products to offer,growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
        </div>
        <div>
          <img src={shopping} alt='Shopping background' />
        </div>
      </div>
      <div className='Abou_cont_box'>
          {About_box.map((val,id) => {
            return <div className='Cont_box' key={id}>
              <Card style={{ width: '13rem' }} className='Cont_div_box'>
                <span className='Font_span mt-3'>{val.font_icon}</span>
                <Card.Body>
                 <p className='card-title_1'>{val.price}</p>
                 <p className='At_card'>{val.detials}</p>
                </Card.Body>
              </Card></div>
          })}
        </div>
        <div className='Employe_box'>
          <Carousel responsive={responsive} centerMode={true}>
          {emplye_detials.map((vales,id)=>{
            return <div key={id}>
               <Card style={{ width: '12rem' }} className='Cont_div_box'>
               <Card.Img variant="top" src={vales.image} />
                <div className='Emp_detilas_box'>
                 <p className='card-title_1'>{vales.name}</p>
                 <p className='At_card'>{vales.postion}</p>
                 <div className='Emp_icon_box'>
                  <span>{vales.twiter}</span>
                  <span>{vales.insta}</span>
                  <span>{vales.linkdin}</span>
                 </div>
                </div>
              </Card>
            </div>
          })}
          </Carousel>
          <div className='Abot_info_box'>
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
    </div>
  )
}

export default About