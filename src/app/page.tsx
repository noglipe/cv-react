import Experience from "@/components/experience";
import Profile from "@/components/profile";
import Topo from "@/components/topo";

import imgTextura from '../../public/textura2.jpg'

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-destaque h-3 w-full"> </div>
      <div
        className="flex flex-col min-h-full justify-center items-center"
        style={{ backgroundImage: `url(${imgTextura.src})` }}
      >
        <div>
          <div className=" flex flex-col w-full max-w-lg sm:max-w-7xl p-4">
            <div className="">
              <Topo />
            </div>
            <div className="flex sm:flex-row sm:mt-5 flex-col">
              <div className="sm:w-1/3 p-1 mr-7 mb-7">
                <Profile />
              </div>
              <div className="flex flex-grow pl-7 p-1 sm:border-l-4 sm:border-t-0 border-t-4 border-gray-700 ">
                <Experience />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
