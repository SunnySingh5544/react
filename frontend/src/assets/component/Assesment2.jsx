








function Assesment(){
  return( 
      <>
      <div className="h-[83px] bg-blue-300  border ">
          <h1 className="text-4xl mt-5 ml-2">Assesment</h1>
          
         
      </div>
      <div className="flex flex-col  ml-2 md:ml-1 lg:ml-20 lg:mt-10 mt-2 gap-6 lg:flex flex-col ">
      <div className="border rounded w-40 h-20 sm:w-300 sm:h-100  bg-blue-300 ml-2  " >camera</div>
      <div className="h-50 mt-2 border rounded shadow mb-1 lg:flex">code editor</div>

      <div className=" h-full pd-20 w-full mb-4  text-lg mr-2 font-semibold text-gray-700  bg-blue-300 border rounded-lg p-4 shadow-md">
Question 1 / 10
<div className="w-full h-2 bg-gray-200 rounded-full mt-2 ml-2">
  <div className="h-full bg-blue-500 rounded-full" style={{ width: '10%' }}></div>
</div>
</div>

      
    </div>
    <div className="sm:flex flex-row ml-2 md:ml-1 lg:ml-20 lg:mt-10 mt-2 gap-6 lg:flex flex-col">
<div className="w- h-100 mt-2 rounded border sm:flex flex-col">
  <h1 className="text-center text-xl font-bold mt-2 mb-10 border-b-2">
    Questions
  </h1>
</div>

</div>

      </>
  )
}
export default Assesment;


function Assessment() {
  return (
    <>
      <div className="h-[83px] bg-blue-300 border">
        <h1 className="text-4xl mt-5 ml-2">Assessment</h1>
      </div>

  
      <div className="flex flex-col lg:flex-row gap-6 p-4">
        
       
      <div className="flex flex-col gap-4 flex-1">
          <div className="text-lg font-semibold text-gray-700 bg-blue-300 border rounded-lg p-4 shadow-md">
            Question 1 / 10
            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '10%' }}></div>
            </div>
          </div>

          <div className="border rounded p-4 bg-white shadow h-200">
            <h1 className="text-center text-xl font-bold mb-4 border-b-2 pb-2">
              Questions
            </h1>
           
          </div>
        </div>

               
            
        <div className="flex flex-col gap-4 flex-1">
          <div className="w-full h-[100px] border rounded bg-blue-300 p-4">
            Camera
          </div>
          <div className="h-[200px] border rounded shadow p-4 bg-white">
            Code Editor
          </div>
        </div>
      </div>
    </>
  );
}

export default Assessment;
