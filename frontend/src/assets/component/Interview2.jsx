import { SlCallEnd } from "react-icons/sl";
import { IoChatbox } from "react-icons/io5";
import { IoMdCode } from "react-icons/io";
import { BiFullscreen } from "react-icons/bi";

function Interview() {
  return (
    <div className="flex flex-col lg:flex-row p-4">
     
      <div className="flex-1">
        <div className="bg-blue-100 w-270 h-60 border rounded-lg mt-4 p-4 flex justify-end sm:h-130">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded flex items-center justify-center">
            user
          </div>
        </div>

        <div className="bg-transparent  rounded-lg shadow-lg p-4">
          <div className="bg-transparent rounded-lg py-2 px-4">
            <div className="flex justify-around">
              <div className="bg-red-700 p-2 rounded text-white">
                <SlCallEnd />
              </div>
              <div className="bg-red-700 p-2 rounded text-white">
                <IoChatbox />
              </div>
              <div className="bg-red-700 p-2 rounded text-white">
                <IoMdCode />
              </div>
              <div className="bg-red-700 p-2 rounded text-white">
                <BiFullscreen />
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* right div  */}
      <div className=" h-50 bg-blue-300 border rounded-lg mt-4 lg:mt-4 lg:ml-6 p-4 w-full lg:w-1/3 flex items-center justify-center sm:h-150">
        HII
      </div>
    </div>
  );
}

export default Interview;
