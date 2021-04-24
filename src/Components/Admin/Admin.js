import React, { useContext } from 'react';
import './Admin.css'
import mng from '../../Images/grid 1.png'
import add from '../../Images/plus 1.png'
import edit from '../../Images/edit 1.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ManageProduct from '../ManageProduct/ManageProduct';
import AddProducts from '../AddProducts/AddProducts';
import { UserContext } from '../../App';

const Admin = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <Router>
            <div className="container">
                <div class="sidebar">
                    <Link to="/manageProduct"><img className='icon' src={mng} alt=""/><p>Manage Product</p></Link>
                    <Link to="/addProduct"><img className='icon' src={add} alt=""/> <p>Add Product</p></Link>
                    <Link><img className='icon' src={edit} alt=""/><p>Edit Product</p></Link>
                </div>
                <div class="content">
                    <div className="admin-detail">
                        <img src={loggedInUser.image} alt=""/>
                        <h3>{loggedInUser.name}</h3>
                    </div>
                    <Switch>
                    <Route path="/manageProduct">
                        <ManageProduct/>
                    </Route>
                    <Route path="/addProduct">
                        <AddProducts/>
                    </Route>
                </Switch>
                </div>
               
            </div>
        </Router>
    );
};

export default Admin;