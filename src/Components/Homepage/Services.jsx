import {useEffect,useRef} from 'react'
import { FaCode } from "react-icons/fa";
import puzzle from "../../Assets/6.png";
import Video_bg from "../../Assets/videobg.mp4";
import technicalsupport from "../../Assets/technicalsupport.svg";
import design from "../../Assets/design.svg";
import ITconsult from "../../Assets/itconsult.webp";
export default function Services() {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.playbackRate = "0.2";
  }, []);
  return (
    <div>
      <section className="bg-white text-center mt-10 md:mt-10 py-10 overflow-x-hidden">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 data-aos="fade-down" className="text-black text-5xl pb-4">
              Our Services
            </h1>
            <p
              data-aos="fade-right"
              className="text-center text-[#838386] px-4"
            >
              We are a leading IT solutions provider dedicated to seamlessly
              connecting diverse elements of technology to empower your
              business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:mx-20 px-6 py-6">
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="shadow-lg w-32 h-32 rounded-full border-[1px] bg-servicesbg p-2">
                <FaCode className="px-4 w-28 h-28" />
              </div>
              <div className="md:py-6 md:h-72">
                <h2 className="text-2xl font-lato font-medium md:h-16">
                  Business Application & Development Services
                </h2>
                <p
                  data-aos="zoom-in-right"
                  data-duration="1000"
                  className="text-base text-center font-sans text-[#838386]"
                >
                  Empower your business with tailor-made solutions that
                  streamline operations, enhance productivity, and foster
                  growth.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="shadow-lg w-32 h-32 rounded-full border-[1px] bg-servicesbg p-2">
                <img
                  src={technicalsupport}
                  alt="Technical Support"
                  className="px-4 w-28 h-28"
                />
              </div>
              <div className="md:py-6 md:h-72">
                <h2 className="text-2xl font-lato font-medium  md:h-16">
                  BPO & Resource Provider
                </h2>
                <p
                  data-aos="zoom-in-right"
                  data-duration="1000"
                  className="text-base text-center font-sans text-[#838386]"
                >
                  Optimize your resources and focus on core competencies while
                  we handle your business process outsourcing needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="shadow-lg w-32 h-32 rounded-full border-[1px] bg-servicesbg p-2">
                <img src={design} alt="Design" className="px-4 w-28 h-28" />
              </div>
              <div className="md:py-6 md:h-72">
                <h2 className="text-2xl font-lato font-medium h-16">
                  Design & Creation Services
                </h2>
                <p
                  data-aos="zoom-in-right"
                  data-duration="1000"
                  className="text-base text-center font-sans text-[#838386]"
                >
                  Elevate your brand with visually stunning and user-friendly
                  designs, connecting with your audience on a deeper level.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="shadow-lg w-32 h-32 rounded-full border-[1px] flex items-center bg-servicesbg p-2">
                <img
                  src={ITconsult}
                  alt="IT Consulting"
                  className="px-4 w-28 h-24"
                />
              </div>
              <div className="md:py-6 md:h-72">
                <h2 className="text-2xl font-lato font-medium h-16">
                  IT Consulting{" "}
                </h2>
                <p
                  data-aos="zoom-in-right"
                  data-duration="1000"
                  className="text-base text-center font-sans text-[#838386]"
                >
                  Our team is glad to provide you with professional IT
                  consulting services 24/7. We have been helping lots of
                  companies since our establishment.
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="shadow-md font-spacegrotesk text-sm font-medium  border-[1px] border-gray-500 rounded-3xl px-4 py-2 mt-5 bg-homebtn text-white hover:bg-white hover:border-none hover:text-black hover:px-4 hover:py-2 ">
              View All Services
            </button>
          </div>
        </div>
      </section>

      <section className="relative z-10 items-center text-center bg-cover bg-center bg-no-repeat h-auto">
        <video
        ref={videoRef}
        autoPlay
          muted
          loop
          className="object-cover absolute top-0 left-0 h-full w-full z-[-1]"
        >
          <source src={Video_bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <section>
          <div className="container mx-auto py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 md:justify-center lg:items-center xl:justify-between  gap-10  px-6 lg:mx-32">
              <div>
                <h2
                  className="text-white font-spacegrotesk  text-4xl font-bold text-left"
                  data-aos="zoom-out-up"
                >
                  We connect the scattered pieces of your digital puzzle
                </h2>
                <p
                  className=" text-white text-left font-helvetica text-base mt-3"
                  data-aos="zoom-out-down"
                >
                  Welcome to Scattered Links, where innovation meets
                  integration. We are a leading IT solutions provider dedicated
                  to seamlessly connecting diverse elements of technology to
                  empower your business. At Scattered Links, we understand that
                  success lies in the harmonious collaboration of ideas,
                  technologies, and expertise.
                </p>

                <div
                  data-aos="zoom-out-down"
                  className="flex justify-start mt-3"
                >
                  <button className=" border-black rounded-full px-6 py-2 font-semibold bg-btncolor hover:bg-white hover:text-black hover:border">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="">
                <img src={puzzle} alt="" width={420} />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
