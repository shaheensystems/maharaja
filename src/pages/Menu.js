import Deserts from "../Deserts"
import Mains from "./Mains"
import Starters from "./Starters"
import SubMenu from "./SubMenu"
import React, { useState, useEffect } from "react";
let starters=[ {image:"/Images/Vada.jpg", title:"Vada Sambhar",price:10, Id:1}, {image:"/Images/vegetable-samosa.webp", title:"Vegetable-samosa",price:10, Id:2},{image:"/Images/VadaPav.jpg", title:"VadaPav",price:10, Id:3},{image:"/Images/Onionpakoda.jpg", title:"Onion Pakodas",price:15, Id:4}]
let mains=[{image:"/Images/IndianThali.JPG", title:"Indian Thali",price:20, Id:5}, {image:"/Images/Butterchicken.jpg", title:"Butter Chicken",price:10, Id:6},{image:"/Images/PalakPaneer.jpg", title:"Palak Paneer",price:10, Id:7},{image:"/Images/Chickenbiryani.png", title:"Chicken Biryani",price:10, Id:8}]
let dess=[{image:"/Images/Rasmalai.jpg", title:"Rasmalai",price:10, Id:9}, {image:"/Images/Gulabjamun.JPG", title:"Gulab Jamun",price:10, Id:10},{image:"/Images/Malpua.jpg", title:"Malpua",price:10, Id:11},{image:"/Images/gajarhalwa.jpg", title:"Gajar Halwa",price:10, Id:12}]

function Menu(props) {
  const [cart, setCart] = useState([]);
  const addToCart = (e,el) => {
    setCart([...cart, el]);
};
const [cartTotal, setCartTotal] = useState(0);

useEffect(() => {
  total();
}, [cart]);

const total = () => {
  let totalVal = 0;
  for (let i = 0; i < cart.length; i++) {
    totalVal += cart[i].price;
  }
  setCartTotal(totalVal);
};
const cartItems = cart.map((el) => (
  <div key={el.id}>
    {`${el.title}: $${el.price}`}
    <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
  </div>
));
const removeFromCart = (el) => {
  let hardCopy = [...cart];
  hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
  setCart(hardCopy);
};
  return (
    
    <>
    <div>CART</div>
      <div>{cartItems}</div>
      <div className="icons">

  <span className="fa fa-shopping-cart" ></span>
  </div>
     <h2>Welcome to Maharaja Kitchen</h2>
   
    <SubMenu items={starters} add={addToCart} heading="Starters"/>
    <SubMenu items={mains} add={addToCart}heading="Mains" />
    <SubMenu items={dess} add={addToCart} heading="Deserts" />
    
    </>
  

  
    
  )
}



export default Menu
