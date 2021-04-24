import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './AllProducts.css'

const AllProducts = (props) => {
    const {name,weight,price,image,_id}=props.product;

    const history=useHistory();

    const handleClick=()=>{
        history.push(`/checkOut/${_id}`);
    }
    return (
        <div className="product-card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="card-img" src={image} />
                <Card.Body>
                    <Card.Title>{name}-{weight}</Card.Title>
                    <h3 style={{float:'left'}}>${price}</h3>
                    <Button onClick={handleClick} variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllProducts;