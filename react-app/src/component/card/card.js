import React, { useState } from "react";

import Parcel from "single-spa-react/parcel";
import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from "../header/header";

import Home from "./home";

import Cart from "../cart/cart";
import Footer from "../footer/footer";
import { useUserAuth } from "../login/userAuthControl";

export function Card() {
  const [flag, setFlag] = useState(false);

  const [show, setShow] = useState(true);

  const [cart, setCart] = useState([]);
  const { user } = useUserAuth();
  console.log(user);

  const handleClick = (item) => {
    console.log("item", item, cart);
    const isProductExist = cart.find((product) => product.id === item.id);

    if (isProductExist) {
      if (flag == true) {
        setFlag(flag === true ? false : true);
      }
      sessionStorage.setItem("reactData", item.title);
      isProductExist.amount += 1;

      const newList = cart.map((product) => {
        if (product.id === item.id) {
          setTimeout(() => {
            setFlag(true);
          }, 1000);

          return isProductExist;
        }

        return product;
      });
      // setCart(newList);
      // alert("one more item added in your cart");
      return;
    }

    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);

    const arr = cart;

    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;

    setCart([...arr]);
  };
  return (
    <div>
      <Header setShow={setShow} size={cart.length} />

      {show ? (
        <div>
          <Home handleClick={handleClick} />
          <Parcel
            config={() => System.import("@footer-angular/angular-project")}
          />

          {/* <Footer/> */}
          {flag ? (
            <Parcel
              config={() => System.import("angular-popup")}
              handleError={(err) => console.log(err)}
              parcelDidMount={() =>
                console.log(" Angular parcel for modal is mounted")
              }
            />
          ) : (
            <p></p>
          )}
        </div>
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}
