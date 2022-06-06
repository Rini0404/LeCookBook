import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import { Button } from 'react-daisyui';
import { Link } from "react-router-dom";







const Home = () => {
  return (
    <div className = " flex justify-items-center	justify-center py-20	">
        <Link to = "/Form">
        <Button variant="outline">
        Form Choice
      </Button>
      </Link>

        {/* <Link to = "/Form"> */}
        <Button variant="outline">
        Hot Or Not
      </Button>
      {/* </Link> */}
  </div>
  );
};

export default Home;
