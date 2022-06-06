import React from "react";
import Jumbotron from "../components/Jumbotron";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <Jumbotron>
        <h1>LeCookBook (logo)</h1>
        {/* search bar component */}
        <Button>Search for a recipe</Button>
        <Link to="/random">
              Random Recipe
            </Link>
      </Jumbotron>

    </div>
  );
};

export default Home;