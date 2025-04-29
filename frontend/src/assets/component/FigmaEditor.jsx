import React from "react";

function FigmaEditor() {
  return (
    <div className="flex flex-col sm:flex-row ml-4 md:ml-10 lg:ml-20 mt-6 gap-6 ">
     
      <div className="h-[250px] mr-2 sm:w-[300px] lg:w-[350px] border rounded p-4 lg:h-[600px]">
        <h1 className="text-center text-xl font-bold mt-2 mb-10 border-b-2">
          Questions
        </h1>
      </div>

 
      <div className="bg-blue-300 h-[250px] md:w-[400px] lg:w-[500px] border rounded  justify-center mr-2  lg:w-[1000px] lg:h-[600px]"> 
        FigmaEditor
      </div>
    </div>
  );
}

export default FigmaEditor;
