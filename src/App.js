import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import Deals from './Components/Deals/Deals';
import CheckOut from './Components/CheckOut/CheckOut';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/orders">
              <Orders/>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute>
            <Route path="/deals">
              <Deals/>
            </Route>
            <PrivateRoute path="/checkOut/:_id">
              <CheckOut/>
            </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
