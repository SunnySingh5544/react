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
