import { Button, Spinner } from 'react-bootstrap';
import React, {useEffect, useState } from 'react';
import './Home.css'
import AllProducts from '../AllProducts/AllProducts';
import spinner from '../../Images/Copper-Loader.gif'

const Home = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://lit-everglades-20763.herokuapp.com/allProducts')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
    },[])
    return (
        <div className="container">
            <div className="search-field">
                <input className='input' type="text" placeholder=  "Search grocery items..."/>
                <Button variant='success'>Search</Button>
            </div>
            <div className="spinner">
               {
                   products.length === 0 && <img src={spinner} alt=""/>
               }
            </div>
            <div className="mt-5 row ">
                {
                    products.map(product=> <AllProducts product={product}></AllProducts>)
                }
            </div>
            <footer className='footer'><p>All rights reserved by @robin</p></footer>
        </div>
    );
};
export default Home;