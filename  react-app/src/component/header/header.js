import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BiLogOut } from "react-icons/bi";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./dropdown.css";
import { useUserAuth } from "../login/userAuthControl";

export function Header({ setShow, size }) {
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const menuToggle = () => {
    const toggleMenu = document.querySelector(".menu");

    toggleMenu.classList.toggle("active");
  };

  return (
    <>
      <nav>
        <div className="logo">
          <GiWhiteBook></GiWhiteBook>BookStore
        </div>

        <input type="checkbox" id="click"></input>

        <label htmlFor="click" className="menu-btn">
          <GiHamburgerMenu
            className="menuicon"
            color="skyblue"
          ></GiHamburgerMenu>
        </label>

        <ul>
          <li>
            <a href="#">
              <AiFillHome
                color="skyblue"
                size={30}
                onClick={() => setShow(true)}
              ></AiFillHome>
            </a>
          </li>

          <li>
            <a href="#">
              <FaShoppingCart
                className="me-2"
                color="skyblue"
                size={30}
                onClick={() => setShow(false)}
              ></FaShoppingCart>

              <span className="cartui me-5">{size}</span>
            </a>
          </li>
          <div className="action">
            <div className="profile">
              <FaUser color="skyBlue" size={30} onClick={menuToggle}></FaUser>
            </div>

            <div className="menu">
              <h3>{user && user.email}</h3>

              {/* <h3>{user.displayName}</h3> */}

              <ul>
                <li>
                  <a href="#">
                    <span onClick={handleLogout}>Logout</span>

                    <BiLogOut
                      color="skyBlue"
                      size={30}
                      onClick={handleLogout}
                    ></BiLogOut>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
}
