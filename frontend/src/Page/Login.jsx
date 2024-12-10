import trolly from '../Image/trolly.avif'
const Login = () => {
    const Inputesfilldes=[{
        Headtitle:'Log in to Exclusive',
        SubHeading:'Enter your details below',
        Email:'Email or Phone Number',
        Pass:'Password',
        Sign:'Log in',
        For:'Forget Password?'
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
            <input className='Sup-int' placeholder={Inputesfilldes.map((val)=>val.Email)} />
            <input className='Sup-int' placeholder={Inputesfilldes.map((val)=>val.Pass)} />
            <div className='Log-box'>
            <button className='Sup-btn Log-btn'>{Inputesfilldes.map((val)=>val.Sign)}</button>
            <p className='Sup-par'>{Inputesfilldes.map((val)=>val.For)}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login