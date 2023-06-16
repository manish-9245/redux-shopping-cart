import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Shopping Cart made with REDUX</h2>
      <section>
        <h2>Products</h2>
        <Products />
      </section>
    </div>
  );
};

export default Home;