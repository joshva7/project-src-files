import '../CssCompontens/Footer.css'
const Footer = () => {
    const year=new Date().getFullYear()
    return (
    <div className='FO-div'>
        <div className='Fo-box'>
            <ul className='Fo-list'>
                <li className='Fo-list-head'>Exclusive</li>
                <li>Subscribe</li>
                <li>Get 10% off your first order</li>
                <li><input placeholder='Enter your email' className='Fo-input'/></li>
            </ul>
            <ul  className='Fo-list'>
                <li className='Fo-list-head'>Support</li>
                <li>111 Bijoy sarani,Dhaka,</li>
                <li>DH 1515,Bangladesh.</li>
                <li>exclusive@gmail.com</li>
                <li>+91 0987654321</li>
            </ul>
            <ul  className='Fo-list'>
                <li className='Fo-list-head'>Account</li>
                <li>MY Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
            </ul>
            <ul  className='Fo-list'>
                <li className='Fo-list-head'>Quick Link</li>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='Copyright'>
          <p>Copyright Rimel {year} All right reserved</p>
        </div>
    </div>
  )
}

export default Footer