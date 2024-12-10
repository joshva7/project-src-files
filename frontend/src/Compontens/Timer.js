import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import '../CssCompontens/Timer.css' 
import Prodates from './Prodates'
import Data_prodates from '../Assets/Prodaseliste'
const Timer = ({ duration,Prodate}) => {  
    const [Time, settime] = useState([duration])
    useEffect(() => {
        setTimeout(() => {
            settime(Time - 1000);
        }, 1000)
    }, [Time])
    const UpdateTime = (miliesecound) => {
        let total_secound = parseInt(Math.floor(miliesecound / 1000))
        let total_minute = parseInt(Math.floor(total_secound / 60))
        let total_houres = parseInt(Math.floor(total_minute / 60))
        let total_days = parseInt(Math.floor(total_houres / 24))

        let secound = parseInt(total_secound % 60)
        let minute = parseInt(total_minute % 60)
        let houres = parseInt(total_houres % 24)
        return `0${total_days} : ${houres} : ${minute} : ${secound}`
    }
    return (
        <div className='container Ti-box'>
            <div>
                <div className="Ti-timer mt-5">
                    <div className="Ti-Titles"></div>
                    <span className="Ti-date">Today's</span>
                </div>
            </div>
            <div className='Fs-box-time mt-3'>
                <span>
                    <h3 className='Ti-H3'>Flash Sales</h3>
                </span>
                <span className='Time-Ti'>{UpdateTime(Time)}</span>
               <div className='Ti-Arrows'>
                <FontAwesomeIcon icon={faArrowLeft} />
                <FontAwesomeIcon icon={faArrowRight} />
                </div> 
            </div> 
 
              <div className='pro-box mt-3'> {Data_prodates.map((item,i)=>{
                return <Prodates key={i} name={item.name} price={item.price} image={item.image} description={item.description} category={item.category}/>
              })} </div>  
        </div>
    )
}

export default Timer