import '../CssCompontens/Contact.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  return (
    <div>
       <span className='Cont-link'>
      <Link to='/' className='Cont-link-child-1'>Home</Link>
      <span className='Cont-link-child-1'>/</span>
      <Link to='/Contact' className='Cont-link-child-2'>Contact</Link>
      </span>
        <div className='Contract-box'>
          <div className='Cont-inside-box'>
            <div className='Cont-inside-cont'>
           <span className='Cont-font-icon'>
           <FontAwesomeIcon icon={faPhone} className='Cont_icon'/>
             <h5>Call To Us</h5>
            </span>
            <p>We are available 24/7,7 days a aweek.</p>
            <p className='Cont_p'>Phone:+91 09218886534</p>
            </div>
            <div className='Cont-inside-cont-2'>
              <span className='Cont-font-icon'>
              <FontAwesomeIcon icon={faEnvelope} className='Cont_icon'/>
              <h5>Write To Us</h5>
              </span>
              <p>Fill out our form and we will contact</p>
              <p>you within 24 hours.</p>
              <p>Emails:Facke@gmail.com</p>
              <p>Emails:support@gmail.com</p>
            </div>
          </div>
          <div className='Cont_inside_box_2 contaner'>
            <div className='Cont_inside_box2_Cont'>
              <input className='Cont_int' name='Name' placeholder='Your Name'/>
              <input className='Cont_int' name='Email' placeholder='Your Email'/>
              <input className='Cont_int' name='Phone' placeholder='Your Phone'/>
            </div>
            <div>
              <textarea placeholder='Your Massage' name='Comment' rows={'10'} cols={'79'} className='Cont_texta' ></textarea>
              <button className='Cont_Btn'>Send Massage</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact