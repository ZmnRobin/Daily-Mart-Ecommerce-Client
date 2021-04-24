import React, { useContext } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
     const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <div className="container" >
        <Navbar collapseOnSelect expand="lg">
         <Navbar><Link className="nav-content" to="/home"><h1>DAILY-MART</h1></Link> </Navbar>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="mr-auto">
             </Nav>
             <Nav>
                 <Link className="nav-content px-3" to="/home">Home </Link>
                 <Link className="nav-content px-3" to="/orders">Orders</Link>
                 <Link className="nav-content px-3" to="/admin">Admin</Link>
                 <Link className="nav-content px-3" to="/deals">Deals</Link>
                 { loggedInUser.image &&
                     <img className="ml-3 " style={{width:'45px',height:'40px',borderRadius:'40px'}} src={loggedInUser.image} alt=""/>
                 }
                {
                    loggedInUser.email?<Link to="/login"> <Button className="nav-content-btn px-3" variant="success" onClick={()=>setLoggedInUser({})}>Log Out</Button></Link>
                    :<Link to="/login"> <Button className="nav-content-btn px-3" variant="success">Login</Button></Link>
                }
             </Nav>
         </Navbar.Collapse>
         </Navbar>
     </div>
    );
};

export default Header;