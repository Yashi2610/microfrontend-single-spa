import { useState } from "react";
import { BrowserRouter, Route ,Link, Routes} from "react-router-dom";
import CardPage from "./component/card/home";
import { Header } from "./component/header/header";
import Cart from "./component/cart/cart";
import { Card } from "./component/card/card";
import { Login } from "./component/login/login";

export default function Root() {
  return (
    // <section>{props.name} is mounted!

    //  <br/>

    //   <a href="/angular">Go To  app</a>

    // </section>

    //<Card></Card>
    <>
      <BrowserRouter>
        

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/card" element={<Card/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
