import trolly from '../Image/trolly.avif'
import '../CssCompontens/Singup.css'
import { Link } from 'react-router-dom'
const Singup = () => {
  const Inputesfilldes=[{
    Headtitle:'Create an account',
    SubHeading:'Enter your details below',
    name:'Name',
    Email:'Email or Phone Number',
    Pass:'Password',
    Sign:'Sign up with Google',
    alet:'Already have account?'
  }]
  
  return (
    <div>
        <div className='Sup-box'>
          <div>
            <img src={trolly} alt='prodate_image' width={'680px'}/>
          </div>

          <div  className='Sup-title'>
            <h2>{Inputesfilldes.map((val)=>val.Headtitle)}</h2>
            <p>{Inputesfilldes.map((val)=>val.SubHeading)}</p>
            <input className='Sup-int' placeholder={Inputesfilldes.map((val)=>val.name)} />
            <input className='Sup-int' placeholder={Inputesfilldes.map((val)=>val.Email)} />
            <input className='Sup-int' placeholder={Inputesfilldes.map((val)=>val.Pass)} />
            <button className='Sup-btn'>{Inputesfilldes.map((val)=>val.Headtitle)}</button>
            <button  className='Sup-btn btn2'>{Inputesfilldes.map((val)=>val.Sign)}</button>
            <p className='Sup-p'>{Inputesfilldes.map((val)=>val.alet)}<Link to={'/Login'} className='Sup-p'>Log in</Link></p>
          </div>
        </div>

    </div>
  )
}

export default Singup