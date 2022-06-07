import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.png";

const Home = () => {
  return (
    <>
    
    <div className=" flex	justify-center py-20	">
      <jumbotron >
      
      <div className="flex justify-center">
        <img className="logo " src={Logo} />
      </div>

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
    
    </>
  );
};

export default Home;
