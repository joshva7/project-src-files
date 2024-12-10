import '../CssCompontens/Header.css'
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faUser,faBagShopping,faX,faArrowRightFromBracket,faStar} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
const Header = ({size}) => {
  const [Account]=useState([
    {id:1,
      name:<Link to={'/Account'} className='pop_side_icone_1'>Manage My Account</Link>,
      icon:<FontAwesomeIcon icon={faUser} />,
    },
    { id:2,
      name:'My Order',
      icon:<FontAwesomeIcon icon={faBagShopping} />,
    },
    { id:3,
      name:'My Cancellations',
      icon:<FontAwesomeIcon icon={faX} />,
    },
    { id:4,
      name:'My Reviews',
      icon:<FontAwesomeIcon icon={faStar} />,
    },
    { id:5,
      name:'Logout',
      icon:<FontAwesomeIcon icon={faArrowRightFromBracket} />,
    },
  ])
  const [pop,setpop]=useState(false)
  const Handlesidenave =()=>setpop(!pop)
  return (
    <div>
      <div className='SaleTop p-2'>
        <p> Summer sale For ALL Swim Suits And Free Express Delivery - OFF 50%! <line className="sale-link m-3">ShopeNow</line></p>
        <DropdownButton id="dropdown-basic-button" title="English"  size="sm" className='drop-box'>
          <Dropdown.Item href="#/action-1">France</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className='Header-Title mt-3 pb-2'>
        <h3 className="HT-TITLE">Exclusive</h3>
        <ul className="HT-ul">
         <li><Link to={"/"} className='Head-li'>Home</Link></li> 
         <li><Link to={'/Contact'} className='Head-li'>Contact</Link></li>
        <li><Link to={"/Singup"} className='Head-li'>Singup</Link></li>
         <li><Link to={'/About'} className='Head-li'>About</Link></li>
        </ul>
        <div>
          <label>
            <input placeholder='What are you lokking for ?' className="HT-INT" />
          </label>
          <Link className='HT-btn m-2' to={'/Card'}><FontAwesomeIcon icon={faCartShopping} /><span>{size}</span></Link> 
          <button className='HT-btn m-2' onClick={Handlesidenave}><FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
      {pop ?  
      <div className='Account_side_pop'>
        {Account.map((value,id)=>{
          return  <ul key={id} className='Account_side_list'>
              <li><span className='Account_font'>{value.icon}</span>{value.name}</li>
            </ul>
        })}
      </div>
      : ""
      }
    </div>
  )
}

export default Header