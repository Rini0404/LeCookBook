import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.png";

const Home = () => {
  return (
    <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={Logo}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Find your&nbsp; Next
            <span className="dark:text-violet-400">&nbsp; Meal</span>&nbsp; With Us!
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" /> turpis pulvinar, est
            scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

            <Link to ="/Form">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900"
            >
              Le Search
            </a>
            </Link>
            <Link to="/random">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-coolGray-100"
            >
              Le Random
            </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

//  <Link to="/Form">
//           <button>
//             {/* search bar component */}
//             Search For a Recipe
//           </button>
//         </Link>

//         <Link to="/random">
//           <button>Random Recipe</button>
//         </Link>
