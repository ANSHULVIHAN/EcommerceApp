import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";
//import styled from "styled-components";
//import { logoutUser } from "../slices/authSlice";
//import { toast } from "react-toastify";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {CgClose, CgMenu} from 'react-icons/cg'
import { useState } from "react";

const NavBar = () => {
  const[menuicon,setMenuicon]=useState();

 

  return (
    <nav className={menuicon ? "navbar active": "navbar"}>


            <div className="nav-bars"> 
            <Link to="/">
            <h2>OnlineApp</h2>

          </Link>
         
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/single">Singleproduct</Link>
             <Link to="/login">Login</Link>
             <Link to="register">Register
             
             <AiOutlineShoppingCart className="cart-trolley"/>
             <span className="cart-total">10</span>
             <div>
             <CgMenu name="menu-outline" className="mobile-nav-icon" 
             onClick={()=>setMenuicon (true) } />
            
           
             <CgClose name="close-outline"  className="mobile-nav-icon "
             onClick={()=>setMenuicon (false) } />
             </div>
             
             
             </Link>
          
          </div>
         
  
    </nav>
  )}


export default NavBar;

