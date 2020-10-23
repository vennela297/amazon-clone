import React from "react";
import "./CSS/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div class="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
        ></img>

        <div className="home__row">
          <Product
            id={4}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ1tuQOeIrOPBgNZUvB7t6XC3e8Yjw9dhfRRdkc4rZGSTCp3nQTowL_eh8sjIAOWLCe7SKCLut&usqp=CAc"
            price={29.19}
            rating={5}
          />

          <Product
            id={5}
            title="Stand Mixer (cake Mixer), Stand planetary mixer, spiral Cake Mixer, Pizza Flour Mixers, Cream"
            image="https://images-na.ssl-images-amazon.com/images/I/41dIhGZ8qWL.jpg"
            price={239.0}
            rating={3}
          />
          {/* product */}
        </div>

        <div className="home__row">
          <Product
            id={1}
            title="Mi Smart Band 4- India's No.1 Fitness Band, Up-to 20 Days Battery Life, Color AMOLED Full-Touch Screen, Waterproof with Music Control and Unlimited Watch Faces"
            image="https://images-na.ssl-images-amazon.com/images/I/71ZSpNjEl0L._SX425_.jpg"
            price={39.99}
            rating={3}
          />
          <Product
            title="Echo Dot (3rd Gen) bundle with Amazon Smart Plug - Sandstone"
            image="https://images-na.ssl-images-amazon.com/images/I/61-ZaqPxznL._AC_SX522_.jpg"
            price={59.99}
            rating={4}
          />

          <Product
            id={2}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation) with AppleCare+ Bundle"
            image="https://images-na.ssl-images-amazon.com/images/I/41wFyW8SdhL._AC_SX425_.jpg"
            price={1128.99}
            rating={5}
          />
          {/* product */}
          {/* product */}
          {/* product */}
        </div>

        <div className="home__row">
          {/* product */}{" "}
          <Product
            id={3}
            title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQXjZR4_PbkzDEDOfSO6rCoyi9JKeQs25AXLUFHMkBA5ZGB77g4yE&usqp=CAc"
            price={199.99}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
