import React from "react";
import Jumbotron from "../components/Jumbotron";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div className=" flex justify-items-center	justify-center py-20	">
      <Jumbotron>
        <h1>LeCookBook (logo)</h1>
        <Link to="/Form">
          <Button>
            {/* search bar component */}
            Search For a Recipe
          </Button>
        </Link>

        <Link to="/random">
          <Button>Random Recipe</Button>
        </Link>
      </Jumbotron>

    </div>
  );
};

export default Home;