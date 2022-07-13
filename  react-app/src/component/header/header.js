import React, { useState } from 'react';

import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {FaUser} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import {GiWhiteBook} from "react-icons/gi";
import {AiFillHome} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi"




export function Header({setShow, size }) {
 
  

 

   
    
  
  return (

<>

<nav>
              <div className="logo"><GiWhiteBook></GiWhiteBook>BookStore</div>
              <input type="checkbox" id="click"></input>
              <label htmlFor="click" className="menu-btn">
              
                <GiHamburgerMenu  className="menuicon" color="skyblue"></GiHamburgerMenu>
              </label>
              <ul>
                <li><a  href="#" ><AiFillHome color="skyblue" size={30} onClick={() => setShow(true)}></AiFillHome></a></li>&nbsp;&nbsp;
                <li><a href="#"><FaUser color="skyblue" size={30}></FaUser></a></li>&nbsp;&nbsp;
                <li><a href="#"><FaShoppingCart color="skyblue"size={30}  onClick={() => setShow(false)}></FaShoppingCart><span className='cartui'>{size}</span></a></li>
                
              </ul>
            </nav>

            <div>
        
      </div> 


</>
  );
}

