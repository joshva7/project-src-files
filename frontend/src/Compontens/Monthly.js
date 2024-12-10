import idataimg from '../Image/earport1.jpeg'
import Data_prodates_2 from "../Assets/Prodateslist2"
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
const Monthly = () => {
        const [Times, settime] = useState([5 * 24 * 60 * 60 * 1000])
        useEffect(() => {
            setTimeout(() => {
                settime(Times - 1000); 
            }, 1000)
        }, [Times])
        const UpdateTimes = (miliesecound) => {
            let total_secound = parseInt(Math.floor(miliesecound / 1000))
            let total_minute = parseInt(Math.floor(total_secound / 60))
            let total_houres = parseInt(Math.floor(total_minute / 60))
            let total_days = parseInt(Math.floor(total_houres / 24))
    
            let secound = parseInt(total_secound % 60)
            let minute = parseInt(total_minute % 60)
            let houres = parseInt(total_houres % 24)
            return <div className='Cat-Time'>
                <div className='Ct-card'>
                <span className='Ct-sp'>0{total_days}</span>
                <span  className='Ct-p'>Day</span>
                </div>
                <div className='Ct-card'>
                <span className='Ct-sp'>{houres}</span>
                <span  className='Ct-p'>Houre</span>
                </div>
                <div className='Ct-card'>
                <span className='Ct-sp'>{minute}</span>
                <span  className='Ct-p'>Minute</span>
                </div>
                <div className='Ct-card'>
                <span className='Ct-sp'>{secound}
                </span>
                <span className='Ct-p'>Second</span>
                </div>
            </div>
        }
    const Text=[
        {
            month:'This month',
            prodates:'Best Selling Products',
            catagery:'Categories',
            Prodaeli:'Enhance Your',
            Prodaelih3:'Music Experience'
        }
    ]
    return (
        <>
            <div className="container Ti-box">
                <div>
                    <div className="Ti-timer mt-5">
                        <div className="Ti-Titles"></div>
                        <span className="Ti-date">{Text.map((index)=>(index.month))}</span>
                    </div>
                </div>
                <div className='Fs-box-time mt-3'>
                    <span>
                        <h3 className='Ti-H3 Cat-h3'>{Text.map((pro)=>(pro.prodates))}</h3>
                    </span>   
                </div>  
                <div className="My-card mt-5">
                    {Data_prodates_2.map((item,i)=>{
                        return (  <div key={i}>
                            <Card style={{ width: '13rem' }}>
                                <Card.Img variant="top" src={item.img} alt="Card image" /> 
                                <Card.Body>
                                    <Card.Title className='card-title'>{item.name}</Card.Title>
                                    <Card.Text className='card-text tx-bx'>{item.price}
                                    <Card.Text className='card-text tx-bx old-bx'>{item.oldprice}</Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>)
                    })}
                </div>
            <div className='imgespop-box'>
                <img src={idataimg} alt='earphot discount' className='Img-ie mt-5'/>
               <div className='earphot-dis'>
                <p>{Text.map((txt)=>txt.catagery)}</p>
                <h1 className='ep-h'>{Text.map((txt)=>txt.Prodaeli)}</h1>
                <h1  className='ep-h tites-box'>{Text.map((txt)=>txt.Prodaelih3)}</h1>
                <span className='TimeDeils'>{UpdateTimes(Times)}</span> 
                <div className='ep-btn'>
                <Button variant="success" size='lg' >Buy Now</Button>
                </div>
               </div>
            </div>
            </div>
        </>
    )
}

export default Monthly