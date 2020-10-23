import React from "react";
import "./CSS/Checkout.css";
import Subtotal from "./Subtotal";
import { Link } from "react-router-dom";
import CheckoutProducts from "./CheckoutProducts";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/Adhoc/cookingdays_pc_header.jpg"
        ></img>

        <div>
          <h3>Hello,{user?.email}</h3>
          <h2 className="checkout__title"> Your Shopping Basket </h2>

          {/* rendering the checkout products which are in the basket */}

          {basket.map(item => (
            <CheckoutProducts
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
