import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import './Orders.css'

const Orders = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [orderProduct,setOrderProduct]=useState([])
    const email=loggedInUser.email;

    useEffect(()=>{
        fetch('https://lit-everglades-20763.herokuapp.com/orderList?email='+email)
        .then(res=>res.json())
        .then(data=>setOrderProduct(data))
    },[])

    return (
        <div className="container">
            <div className='order-table'>
                <div className='orderer'>
                   <h3><span style={{color:'orange'}}>{loggedInUser.name}</span> your order list:</h3>
                    <h5>Total Order: {orderProduct.length}</h5>
                </div>
                <div>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>Weight</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Ordered Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderProduct.map(product=>{
                            const {orderTime,date}=product;
                            const {name,weight,price}=product.product;
                            return(
                                <tr>
                                <td>{name}</td>
                                <td>{weight}</td>
                                <td>{price}</td>
                                <td>{date}</td>
                                <td>{orderTime}</td>
                                </tr>)
                        })
                    }
                </tbody>
                </Table>
                </div>
            </div>
        </div>
    );
};

export default Orders;