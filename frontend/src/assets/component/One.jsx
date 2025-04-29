import React from 'react';

function One() {
  return (
    <>
     
      <div className="border-b py-4">
        <h1 className="text-3xl sm:text-5xl mt-10 ml-5 sm:ml-40">
          Learn And <span className="text-blue-600">Practices</span> <br />
          Without Limit
        </h1>
        <div className="flex flex-row sm:flex-row gap-4 mt-10 ml-10 mr-10 sm:ml-40">
          <button className="px-4 py-2 border text-black rounded-xl">About us</button>
          <button className="px-4 py-2 border text-black rounded-xl">Try for free</button>
        </div>
      </div>

     
      <div className="border-b px-5">
        <div className="flex flex-col md:flex-row  items-center gap-10 mt-10 mb-10 sm:ml-40">

         
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] bg-white flex justify-center items-center shadow-[0_4px_15px_rgba(128,128,128,0.4)] rounded-md ">
              Learn And Perform
            </div>
            <button className="w-[200px] h-10 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition-shadow duration-300 mt-5 sm:ml-0">
              Learn And Perform
            </button>
          </div>

          
          <div className="flex flex-col items-center  md:mt-0">
            <div className="w-[200px] h-[200px]  sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] bg-white flex justify-center items-center shadow-[0_4px_15px_rgba(128,128,128,0.4)] rounded-md">
              Check Your Ability
            </div>
            <button className="w-[200px] h-10 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition-shadow duration-300 mt-5">
              Check Your Ability
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default One;
