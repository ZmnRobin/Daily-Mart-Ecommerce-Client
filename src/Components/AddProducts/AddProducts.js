import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddProduct.css'
import axios from 'axios';

const AddProducts = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imgURL,setImgURL]=useState(null)
    const onSubmit = data => {
        const formData={
            name:data.productName,
            weight:data.weight,
            price: data.price,
            image:imgURL
        }
       fetch('https://lit-everglades-20763.herokuapp.com/addProduct',{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body: JSON.stringify(formData)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data) {
               alert('Product saved successfully.! Go to home page and check it out.Thank you'
               )
           }
       })
    };

    const handleImg=event=>{
      const imageData=new FormData();
      imageData.set('key','2a27aceecddc0a626fbf702db000e60a');
      imageData.append('image',event.target.files[0])
    
      axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setImgURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    return (
        <div className="row add-product">
            <div className="col-md-5 mt-4" style={{textAlign:'center'}}>
                <h3>Add Product</h3>
            </div>
            <div className="product-form col-md-7 mt-3">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" name="productName" placeholder="Enter product name" ref={register} required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Product Weight</Form.Label>
                        <Form.Control type="text"name="weight" placeholder="Enter product weight" ref={register} required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="text" name="price" placeholder="Add price" ref={register} required />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Add Photo</Form.Label>
                        <Form.Control type="file" name="photo" placeholder="Upload Photo"ref={register} onChange={handleImg} required />
                    </Form.Group>
                    <Button className='btn' variant="primary" type="submit">Save Product</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddProducts;