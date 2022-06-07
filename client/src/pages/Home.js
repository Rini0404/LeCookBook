import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div className=" flex justify-items-center	justify-center py-20	">
      <jumbotron>
        <h1>LeCookBook (logo)</h1>
        <Link to="/Form">
          <button>
            {/* search bar component */}
            Search For a Recipe
          </button>
        </Link>

        <Link to="/random">
          <button>Random Recipe</button>
        </Link>
      </jumbotron>

    </div>
  );
};

export default Home;