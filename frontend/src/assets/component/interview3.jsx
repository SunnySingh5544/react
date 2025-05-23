import { SlCallEnd } from "react-icons/sl";
import { IoChatbox } from "react-icons/io5";
import { IoMdCode } from "react-icons/io";
import { BiFullscreen } from "react-icons/bi";

function Interview() {
  return (
    <div className="flex flex-col justify-center items-center p-4">
     
      <div className="fixed inset-0 bg-blue-100 border rounded-lg p-4">
     
        <div className="relative w-full h-full">
          
   
          <div className="absolute bottom-4 right-4 w-20 h-20 sm:w-40 sm:h-40 bg-white rounded flex justify-center items-center shadow">
            user
          </div>


          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-200 h-16 px-4 rounded-lg flex items-center space-x-2  gap-4">
            <div className="bg-red-700 w-10 h-10 p-2 flex justify-center items-center rounded-full">
              <SlCallEnd className="text-white" />
            </div>
            <div className="bg-red-700 w-10 h-10 p-2 flex justify-center items-center rounded-full">
              <IoChatbox className="text-white" />
            </div>
            <div className="bg-red-700 w-10 h-10 p-2 flex justify-center items-center rounded-full">
              <IoMdCode className="text-white" />
            </div>
            <div className="bg-red-700 w-10 h-10 p-2 flex justify-center items-center rounded-full">
              <BiFullscreen className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interview;
``