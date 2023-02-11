import React from 'react';
import products from '../assets/products.json'
import { Card ,Button} from 'react-bootstrap';
import "./Products.css"
class Products extends React.Component{

  render(){
  return (
     <div className='box'>
      
      {products.map((product => 
       <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={product.img} require="../assets/images" />
       <Card.Body>
         <Card.Title>{product.name}</Card.Title>
         <Card.Text>
         {product.quantity}           </Card.Text>
           <Card.Text>
           {product.price}           </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
      )
      )}
    </div>
  );
    
   }
}
export default Products;