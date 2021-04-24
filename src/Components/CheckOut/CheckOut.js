import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './CheckOut.css'

const CheckOut = () => {
    const {_id}=useParams();
    const [checkOutProducts,setCheckOutProducts]=useState([]);

    const [loggedInUser,setLoggedInUser]=useContext(UserContext);

    useEffect(()=>{
        fetch('https://lit-everglades-20763.herokuapp.com/allProducts')
        .then(res=>res.json())
        .then(data=>setCheckOutProducts(data))
    },[])

    const clickedProduct=checkOutProducts.filter(products=>products._id == _id);
    const singleProduct=clickedProduct[0];
    const {name,weight,price}=singleProduct||{};
    console.log(singleProduct)

    const handleCheckOut=()=>{
        let time = new Date().toLocaleTimeString();
        let today= new Date().toLocaleDateString()

        const orderDetails={...loggedInUser,product:singleProduct,orderTime:time,date:today}
        fetch('https://lit-everglades-20763.herokuapp.com/addOrder',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data) {
                alert('Your order placed successfully.!')
            }
        })
    }

    return (
        <div className='container'>
            <h3 className="mt-4">Checkout Order:</h3>
            <Table className='checkout-table mt-3' striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{name}</td>
                    <td>{weight}</td>
                    <td>${price}.00</td>
                    </tr>
                    <tr>
                    <td><h5>Total:</h5></td>
                    <td></td>
                    <td>=${price}.00</td>
                    </tr>
                </tbody>
            </Table>
            <Button onClick={handleCheckOut}>Place Order</Button>
        </div>
    );
};
export default CheckOut;