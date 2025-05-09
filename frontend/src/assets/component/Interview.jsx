import { SlCallEnd } from "react-icons/sl";
import { IoChatbox } from "react-icons/io5";
import { IoMdCode } from "react-icons/io";
import { BiFullscreen } from "react-icons/bi";

function Interview() {
  return (
    <div className="flex flex-col justify-center items-center p-4">

     
      <div className="h-50 w-full sm:w-64  lg:w-300 h-120 bg-blue-100 border ml-2 mt-2 rounded-lg flex justify-end items-end p-4">
        <div className=" w-20 h-20 sm:w-40 sm:h-40 bg-white rounded flex justify-center items-center">
          user
        </div>
      </div>

     
      <div className="w-full sm:w-64 md:w-80 lg:w-300 bg-blue-800  rounded-lg shadow-lg p-2 ml-2">
        <div className="bg-red-300 h-16 w-full mb-2 rounded-lg py-1 flex justify-center items-center">
          <div className="flex space-x-2 justify-center items-center">
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
