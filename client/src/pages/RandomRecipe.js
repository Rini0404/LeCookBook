import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD
// import Test from "../cookie-tin.jpg";
=======
// import Test from "../";
>>>>>>> 3bedd6d82613c0538e854ee2e5b21cc7647f76da
import { Link } from "react-router-dom";

let apiResults = ''
let recipe1 = ''

const apiQuery = async () => {
  // This is the base URL we will use to make our API call.
  // Any parameters the user adds will be appended to the end of this URL.

      // call to api for 'random' recipes
  let URL =
    "https://api.spoonacular.com/recipes/random?number=1&apiKey=30b13071146948258c7fd48333730276";

  // First we grab the values of all the forms on the page.

  

  // Then we check to make sure the values are not the default value.
  // If they are the default values, we move on to the next if statement.
  // If they are anything but the default values, we define the parameter and append it to the URL.
  // We use regEx to replace any spaces with a + to ensure we have a valid URL to make our API call.

  
  try {
    // First we get the response from our API query.
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    
  } catch (err) {
    console.log(err.message);
  }
};




function RandomRecipe(props) {
    return (
        <div className='container'>
            <div className = "px-4 pb-4">
        <div className="ayo max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            {/* <img className="rounded-t-lg" src={Test} alt="" /> */}
        </a>
        <div className="p-5">
                  {/* import title of dish here */}
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 
                dark:text-white">Sopa Azteca (Tortilla Soup)</h5>
            
            {/* Food Description here */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This recipe is made with a simple, richly-seasoned, tomato-chile broth that is ladled hot over crispy tortilla strips and loaded up with your choice of toppings.</p>

        {/* Code for adding tags, ex: cusinie type, Type of Dish, Tintolerences, Diet */}
          <div className="p-6 flex justify-center">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Mexican</span>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Vegan</span>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Soup</span>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Grain</span>
          </div>

            <div className = "flex justify-between">
            {/* Buttons need to have an OnClick for adding to you new CookBook */}
            <button href="#" className="px-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                read more
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
{/* 
            <button href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                really love it
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button> */}

            <button href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                save 
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>

        </div>
      </div>
    </div>
    <Link to="/random">
          <Button>Not Interested</Button>
        </Link>
    <Link to="/random">
          <Button>I like it, Picasso</Button>
        </Link>
            </div>
        </div>
    )
}

export default RandomRecipe;