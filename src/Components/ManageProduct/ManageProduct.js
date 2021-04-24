import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import edit from '../../Images/Group 307.png';
import del from '../../Images/Group 33150.png';
import './ManageProducts.css'

const ManageProduct = () => {
    const [tableData,setTableData]=useState([])

    const handleProduct=()=>{
                fetch('https://lit-everglades-20763.herokuapp.com/allProducts')
                .then(res=>res.json())
                .then (data=>{
                    setTableData(data)
                })
            }
    const handleDelete=(id)=>{
            fetch(`https://lit-everglades-20763.herokuapp.com/delete/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(result=>{
               handleProduct()
            })
        }
        useEffect(()=>{
            handleProduct();
        },[])

    return (
        <div>
            <div className='mt-3' style={{textAlign:'center'}}>
                <h3>Manage Product</h3>
            </div>
            <div className='mt-3'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>Weight</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    tableData.map(product=>{
                            const{name,weight,price,_id}=product;
                            return (
                            <tr>
                            <td>{name}</td>
                            <td>{weight}</td>
                            <td>${price}</td>
                            <td className='buttons'>
                                <button className='button'><img src={edit}/></button>
                                <button className='button' onClick={(event)=>handleDelete(_id,event)}><img src={del}/></button>
                            </td>
                            </tr>)
                     })
                    }
                </tbody>
             </Table>
            </div>
        </div>
    );
};

export default ManageProduct;