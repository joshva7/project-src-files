import Card from 'react-bootstrap/Card';
const OruProdateData=(props)=>{

    return (
        <div>
            <Card  style={{ width: '12rem' }}> 
                <Card.Img  variant="top" src={props.images} alt="Card image"  />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Title>{props.price}</Card.Title>
                </Card.Body>
            </Card>
        </div>    
    )

}
export default OruProdateData;