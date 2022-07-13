import { useState } from "react";



import CardPage from "./component/card/home";
import { Header } from "./component/header/header";
import Cart from "./component/cart/cart";
import { Card } from "./component/card/card";


export default function Root() {

  


  return (

    // <section>{props.name} is mounted!

    //  <br/>

    //   <a href="/angular">Go To  app</a>

    // </section>

    //<Card></Card>
    <>
    {/* <Header/> */}
    {/* <Home handleClick={handleClick} /> */}
    {/* <Cart cart={cart} setCart={setCart} handleChange={handleChange} /> */}
    <Card/>
     </>
  );

}