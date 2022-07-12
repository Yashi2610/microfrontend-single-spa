import { useState } from "react";



import CardPage from "./component/cardPage.component";



export default function Root() {

  const [cart, setCart] = useState([]);



  const handleClick = (item) => {

    if (cart.indexOf(item) !== -1) return;

    setCart([...cart, item]);

  };



  return (

    // <section>{props.name} is mounted!

    //  <br/>

    //   <a href="/angular">Go To  app</a>

    // </section>

    //<Card></Card>

    <CardPage handleClick={handleClick} />

  );

}