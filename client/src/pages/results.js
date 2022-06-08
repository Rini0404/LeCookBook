import react from "react";
// import { Link } from "react-router-dom";

let apiResults = ''
let recipe1 = ''
let recipe2 = ''
let recipe3 = ''

try {

apiResults = JSON.parse(localStorage.getItem('apiResults'))
recipe1 = apiResults.results[0]
recipe2 = apiResults.results[1]
recipe3 = apiResults.results[2]

console.log('Recipes defined.')
}
catch (err) {
  console.log(err)
}


function stripString(string) {
  string = string.substring(0, string.indexOf('From preparation to the plate'))
  return string.replace(/(<([^>]+)>)/gi, "")
}

const Results = () => {
  return (
    <div className="flex flex-wrap justify-center py-4 ">
      <div className="px-4 pb-4">
        <div className="ayo max-w-sm bg-blue-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={recipe1.image} alt="" />
          <div className="p-5">
            {/* import title of dish here */}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 
                dark:text-white">{recipe1.title}</h5>

            {/* Food Description here */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{stripString(recipe1.summary)}</p>

            {/* Code for adding tags, ex: cusinie type, Type of Dish, Tintolerences, Diet */}
            <div className="p-6 flex justify-center">
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{recipe1.diets[0]}</span>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{recipe1.dishTypes[0]}</span>
            </div>

            <div className="flex justify-between">
              {/* Buttons need to have an OnClick for adding to you new CookBook */}
              <button href="#" className="px-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                More Details
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>

              <button href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Save Food
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>


            </div>
          </div>
        </div>
      </div>
      {/* add new card here and leave one closing </div> */}



      <div className="px-4 pb-4">
        <div className="ayo max-w-sm bg-blue-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={recipe2.image} alt="" />
          <div className="p-5">
            {/* import title of dish here */}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 
                dark:text-white">{recipe2.title}</h5>

            {/* Food Description here */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{stripString(recipe2.summary)}</p>

            {/* Code for adding tags, ex: cusinie type, Type of Dish, Tintolerences, Diet */}
            <div className="p-6 flex justify-center">
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{recipe2.diets[0]}</span>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{recipe2.dishTypes[0]}</span>
            </div>

            <div className="flex justify-between">
              {/* Buttons need to have an OnClick for adding to you new CookBook */}
              <button href="#" className="px-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                More Details
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>

              <button href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Save Food
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>


            </div>
          </div>
        </div>

      </div>

      <div className="px-4 pb-4">
        <div className="ayo max-w-sm bg-blue-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className=" bg-cover rounded-t-lg" src={recipe3.image} alt="" ></img>
          <div className="p-5">
            {/* import title of dish here */}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 
                dark:text-white">{recipe3.title}</h5>

            {/* Food Description here */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{stripString(recipe3.summary)}</p>

            {/* Code for adding tags, ex: cusinie type, Type of Dish, Tintolerences, Diet */}
            <div className="p-6 flex justify-center">
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{recipe3.diets[0]}</span>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{recipe3.dishTypes[0]}</span>
            </div>

            <div className="flex justify-between">
              {/* Buttons need to have an OnClick for adding to you new CookBook */}
              <button href="#" className="px-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                More Details
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>

              <button href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Save Food
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
