import {useEffect} from "react";
import { Link } from "react-router-dom";



function index() {
  // useEffect(() => {

  // })
 
  function showDropDownMenu(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptext(el) {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter").innerText =
      targetText;
    document.getElementById("drop-down-div").classList.toggle("hidden");

  }
  function showDropDownMenuOne(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptextone(el) {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter-one").innerText =
      targetText;
    document.getElementById("drop-down-div-one").classList.toggle("hidden");

  }
  function showDropDownMenutwo(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptexttwo(el) {
    const targetText = el.target.innerHTML;
    document.getElementById("drop-down-content-setter-two").innerHTML =
      targetText;
    document.getElementById("drop-down-div-two").classList.toggle("hidden");

  }


  return (
    <>
<div className="px-2 py-12 ">
  <div className="flex flex-no-wrap items-start">
    <div className="w-full ">
      <div className="py-4 px-2">
        <div className="bg-white rounded shadow mt-7 py-7"> 
          <div className="mt-10 px-7 ">
            <p className="text-xl font-semibold leading-tight text-gray-800">Food Details Here!</p>
            {/* imput data goes here.... */}
            {/* add a form tag later */}
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
              <div>
                <p className="text-base font-medium leading-none text-gray-800">Cuisine</p>
                {/*-Dropdown*/}
                <div className="relative top-1  ">
                  <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                    <button onClick={showDropDownMenu} className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one">
                      <span className="pr-4 text-sm font-medium text-gray-600" id="drop-down-content-setter">
                      Please select your cusine choice..
                      </span>
                      <svg id="rotate" className="absolute z-10 cursor-pointer right-5" width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className="absolute z-20 right-0 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12" id="drop-down-div">
                      <a href="javascript:void(0)" className="hover"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          African
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          American
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          Cajun
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          Carribean
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          Chinese
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          French
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          German
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          Indian
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          Italian
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          Japanese
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          Korean
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          Latin American
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          Mediterranean
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          Mexican
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          Middle Eastern
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          Spanish
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          Thai
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          Vietnamese
                          
                        </p></a>
                    </div>
                  </div>
                  {/* end */}

          {/* Start of type dish */}
            <div className="py-4">
                  <p className="text-base font-medium leading-none text-gray-800">Type of Dish</p>
                <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                    <button onClick={showDropDownMenu} className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one">
                      <span className="pr-4 text-sm font-medium text-gray-600" id="drop-down-content-setter">
                      Please select your cusine choice..
                      </span>
                      <svg id="rotate" className="absolute z-10 cursor-pointer right-5" width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className="absolute z-20 right-0 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12" id="drop-down-div">
                      <a href="javascript:void(0)" className="hover"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            Gluten Free
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            Ketogenic
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            Vegetarian
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            Lacto-Vegetarian (no egg)
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            Ovo-Vegetarian (no dairy)
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            Vegan
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            Pescatarian
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            Paleo
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            Primal
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            Low FODMAP (high in legumes, wheat, and dairy)
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            Whole30
                          
                        </p></a>
                    </div>
                  </div>
                
                </div>
                </div>

                {/* end */}
                <p className="mt-3 text-xs leading-[15px] text-gray-600">Set the product theme of your liking</p>
              </div>
              <div>
                <p className="text-base font-medium leading-none text-gray-800">Intolerances</p>
                <div className="relative top-1">
                  <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                    <button onClick={showDropDownMenuOne} className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one">
                      <span className="pr-4 text-sm font-medium text-gray-600" id="drop-down-content-setter-one">
                        Select if needed! 
                      </span>
                      <svg id="rotate1" className="absolute z-10 cursor-pointer right-5" width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className="absolute right-0 z-20 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12" id="drop-down-div-one">
                      <a href="javascript:void(0)" className="hover"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptextone}>
                          Dairy
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptextone}>
                        Egg
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptextone}>
                          Gluten
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptextone}>
                            Grain
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptextone}>
                          Peanut
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptextone}>
                          Seafood
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptextone}>
                          Sesame
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptextone}>
                            Shellfish
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptextone}>
                          Soy
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptextone}>
                            Sulfite
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptextone}>
                            Tree Nut
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptextone}>
                            Wheat
                          
                        </p></a>
                    </div>
                  </div>
                </div>

                {/* div For Type of diet  */}
                <div className = "py-4">
                <p className="text-base font-medium leading-none text-gray-800 pb">Diet Type</p>
                {/*-Dropdown*/}
                <div className="relative top-1 ">
                  <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                    <button onClick={showDropDownMenu} className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one">
                      <span className="pr-4 text-sm font-medium text-gray-600" id="drop-down-content-setter">
                      Please select your cusine choice..
                      </span>
                      <svg id="rotate" className="absolute z-10 cursor-pointer right-5" width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className="absolute z-20 right-0 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12" id="drop-down-div">
                      <a href="javascript:void(0)" className="hover"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            main course
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            side dish
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          dessert
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            appetizer
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          salad
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          breakfast
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                          soup
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            snack
                          
                        </p></a>
                      <a href="javascript:void(0)"><p className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded" onClick={swaptext}>
                            drink
                          
                        </p></a>
                    </div>
                  </div>
                  {/* end */}
                  </div>
                </div>



                {/* end */}
                <p className="mt-3 text-xs leading-[15px] text-gray-600">Select a layout to show your product display
                </p>
              </div>
              <div>
                <p className="text-base font-medium leading-none text-gray-800">Exclude these Ingredients</p>
                <input type = '' className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                <p className="mt-3 text-xs leading-3 text-gray-600">Set words that are related to the product.</p>
              </div>
              <div>
                <p className="text-base font-medium leading-none text-gray-800">Include these Ingredients</p>
                <input type='' className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                <p className="mt-3 text-xs leading-[15px] text-gray-600">Set words that are related to the product.
                </p>
                
              </div>
            </div>
            {/* End of Diet Type */}
          </div>
          <div className = "p-8">
          
          <Link to="/Results">
          <button type="submit" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Submit</button>
          </Link>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default index;
