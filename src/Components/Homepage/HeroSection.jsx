import { useEffect, useRef } from "react";
// import { GiFreedomDove } from "react-icons/gi";
// import { BsFillFolderSymlinkFill } from "react-icons/bs";
// import { MdOutlineAllInbox } from "react-icons/md";
import Designicon from "../../assets/designicon.svg";
import customericon from "../../assets/customersupport.svg";
import collaborateicon from "../../assets/collaborate.svg";
import Video_bg from "../../Assets/New_Video.mp4";

export default function Herosection() {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.playbackRate = "0.5";
  }, []);
  return (
    <div className="relative overflow-x-hidden" ref={videoRef}>
      <div className="relative h-screen overflow-x-hidden">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-screen md:h-full absolute top-0 left-0 -z-20"
        >
          <source src={Video_bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
        <div className="w-full h-full flex flex-col justify-center items-center  text-white text-center z-30 ">
          <div className="py-16 lg:py-2">
            <div className="text-white text-center flex flex-col gap-4">
              <h1
                data-aos="zoom-in"
                className="text-3xl font-spinnaker md:text-5xl px-4 font-bold mb-4"
              >
                Bridging Future with Digital Links
              </h1>
              <p data-aos="zoom-out" className="text-lg  px-4 lg:text-2xl mb-8">
                with the innovation of futuristic growth
              </p>
              <div>
                <button className=" bg-landingbtn text-white hover:bg-white hover:text-black w-32 rounded-full text-center py-3 text-sm mt-4 font-bold">
                  Get Started
                </button>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-full md:w-full flex md:flex justify-between md:mt-10 py-4 px-4 md:px-40 md:py-8 gap-6">
                  <div className="flex flex-col md:flex-row items-center ">
                    <div className="p-1 rounded">
                      <img
                        src={Designicon}
                        alt=""
                        className="bg-[#CBD2D3] w-10 h-10 px-1 rounded-md"
                      />
                    </div>
                    <p className="ml-2">Design & Development</p>
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="p-1 rounded">
                      <img
                        src={customericon}
                        alt=""
                        className="w-10 h-10 rounded-md"
                      />
                    </div>
                    <p className="ml-2">Cutomer Support</p>
                  </div>
                  <div className="flex flex-col md:flex-row  items-center">
                    <div className="p-1 rounded">
                      <img
                        src={collaborateicon}
                        alt=""
                        className="bg-[#CBD2D3] w-10 h-10 px-1 rounded-md"
                      />
                    </div>
                    <p className="ml-2">Better Collabartion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
