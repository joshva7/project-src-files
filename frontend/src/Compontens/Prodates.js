import Card from 'react-bootstrap/Card';
import '../CssCompontens/Prodatess.css'
import { useState } from 'react';
const Prodates = (props) => {
    const [cart,setCart]=useState([])
    const handleClick=(props)=>{
    console.log(props); 
    let isPresnent=false;
    cart.map((present)=>{
        if(props.id === present){
            isPresnent= true
        }
        if(isPresnent)
            return ;
        setCart([...cart,present])
    })

}
    return ( 
        <div className='pro-box'>
               <div>
                   <Card style={{ width: '10rem' }}>
                       <Card.Img variant="top" src={props.image} alt="Card image" /> 
                       <Card.Body>
                           <Card.Title className='card-title'>{props.description}</Card.Title>
                           <Card.Text className='card-text'>{props.price}</Card.Text>
                         <button className='Cat_add' onClick={()=>handleClick(props)}>Add to Cart</button>
                       </Card.Body>
                   </Card>
               </div>
       </div>
  )
}

export default Prodates