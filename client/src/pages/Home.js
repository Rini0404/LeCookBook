import React from "react";
import Jumbotron from "../components/Jumbotron";
import Button from 'react-bootstrap/Button';
import Nav from "../components/Nav";


const Home = () => {
  return (
    <div className="container">
      <Jumbotron>
        <h1>LeCookBook (logo)</h1>
        {/* search bar component */}
        <Button>Search for a recipe</Button>

        <Button>Random recipe</Button>
      </Jumbotron>

    </div>
  );
};

export default Home;