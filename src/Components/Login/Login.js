import React, { useContext } from 'react';
import './Login.css'
import {FaGoogle} from 'react-icons/fa';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length===0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    let history=useHistory()
    let location=useLocation()
    let { from } = location.state || { from: { pathname: '/'} };

    const handleGoogleSignIn=()=>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const {displayName,email,photoURL}=result.user;
            const user={
                name:displayName,
                email:email,
                image:photoURL
            }
            setLoggedInUser(user);
            history.replace(from)
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }

    return (
        <div className="container">
            <div className='signup-area'>
                <div className='signup' onClick={handleGoogleSignIn}>
                   <h4><FaGoogle/>   Sign up with google</h4>
                </div>
            </div>
        </div>
    );
};

export default Login;