import { useState} from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import Bgimg from "../../assets/bpobg.webp";
import applicationimg from "../../assets/BPOmain.webp";
import secondimg from "../../assets/bposideimg.webp";
import cardimg1 from "../../assets/bpocardimg1.webp";
import cardimg3 from "../../assets/bpocardimg3.webp";
import cardimg2 from "../../assets/bpocardimg2.webp";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const BPOsection = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <section>
      <div className="relative">
      <div className="relative" >
        <div className="relative w-full h-[400px] md:h-[520px] lg:h-[540px]">
          <img src={Bgimg} className="object-cover w-full h-[400px] md:h-[520px] lg:h-[540px]  absolute top-0 left-0 z-[-1]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-40 -translate-y-20 md:-translate-x-1/2 md:-translate-y-64 text-white text-center">
            <div className="md:py-2 lg:py-2 px-6">
              <div className="text-white text-center lg:text-left">
                <div className="flex flex-col md:block lg:flex lg:flex-col justify-center items-center">
                  {" "}
                  <h1
                    data-aos="zoom-in"
                    className="text-2xl lg:text-3xl font-bold mb-4 text-center text-black"
                  >
                    BPO & Resource Provider 
                  </h1>
                  <img src={applicationimg} alt="Applicationimg" />
                </div>
                <div className="flex justify-end -translate-x-40 md:-translate-y-56 md:-translate-x-3 lg:-translate-x-8 lg:-translate-y-64 xl:-translate-x-48 xl:-translate-y-64  z-40">
                  <img
                    src={secondimg}
                    alt="Secondimg"
                    className="hidden md:block md:w-48 md:h-72 lg:w-64 lg:h-96"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="flex flex-col md:mx-32 lg:48 xl:mx-64 my-12">
        <div className="px-4">
          <h1 className="text-3xl font-spacegrotesk font-bold">
            Discover your business potential with{" "}
            <br className="hidden md:block" /> our services
          </h1>
        </div>
        <p className="my-4 font-helvetica font-medium text-base px-4">
          This is your Services section. This is a great place to give more
          information about the services you provide. You can write a general
          description of what your business offers then add more details
          below.This section can be adapted for your website.
        </p>
        <p className="font-helvetica text-base px-4 font-medium">
          You may choose to highlight other things like courses or programs, or
          to share special features about your business that you want to
          promote. Double click on the text box to edit the text and make it
          your own.{" "}
        </p>
      </div>

      <div className="mt-20 pb-10 px-4 md:px-10 w-full">
        <div className="bg-[#CED5D6] py-20 md:px-20 lg:px-5 xl:px-30">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-4 justify-center items-center md:px-20">
            <div className="relative overflow-hidden">
              <img src={cardimg1} alt="CardImg" className="w-full h-96" />

              <div
                className={`maintext bg-black text-white  p-4 absolute bottom-0 left-0 w-full transition-transform ${
                  isHovered1 ? "h-56 opacity-100" : "h-44"
                }`}
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
              >
                <h1 className="font-bold font-raleway text-lg pb-2">
                  In-bound Call Center
                </h1>
                <p className="font-medium font-raleway text-base">
                  Tailor-made applications to suit your unique business needs.
                </p>
                <div
                  className={`opacity-0 transition-opacity absolute top-20 text-white flex gap-10 items-center px-4 py-10 inset-0 ${
                    isHovered1 ? "opacity-100 absolute" : ""
                  }`}
                >
                  <h1 className="font-bold font-raleway text-lg text-white">
                    Consulte
                  </h1>
                  <HiArrowLongRight className="text-4xl" />
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img src={cardimg2} alt="CardImg" className="w-full h-96" />

              <div
                className={`maintext bg-black text-white  p-4 absolute bottom-0 left-0 w-full transition-transform ${
                  isHovered2 ? "h-56 opacity-100" : "h-44"
                }`}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              >
                <h1 className="font-bold font-raleway text-lg pb-2">
                  Out Sourcing
                </h1>
                <p className="font-medium font-raleway text-base">
                  Engaging apps and responsive websites for a seamless user
                  experience.
                </p>
                <div
                  className={`opacity-0 transition-opacity absolute top-20 text-white flex gap-10 items-center px-4 py-10 inset-0 ${
                    isHovered2 ? "opacity-100 absolute" : ""
                  }`}
                >
                  <h1 className="font-bold font-raleway text-lg text-white">
                    Consulte
                  </h1>
                  <HiArrowLongRight className="text-4xl" />
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img src={cardimg3} alt="CardImg" className="w-full h-96" />

              <div
                className={`maintext bg-black text-white  p-4 absolute bottom-0 left-0 w-full transition-transform ${
                  isHovered3 ? " h-56 opacity-100" : "h-44"
                }`}
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
              >
                <h1 className="font-bold font-raleway text-lg pb-2">
                Sales & Marketing

                </h1>
                <p className="font-medium font-raleway text-base">
                  Robust solutions to streamline youroperations and enhance
                  online presence.
                </p>
                <div
                  className={`opacity-0 transition-opacity absolute top-20 text-white flex gap-10 items-center px-4 py-10 inset-0 ${
                    isHovered3 ? "opacity-100 absolute" : ""
                  }`}
                >
                  <h1 className="font-bold font-raleway text-lg text-white py-8">
                    Consulte
                  </h1>
                  <HiArrowLongRight className="text-4xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 text-white bg-gradient-to-r from-purple-800 via-purple-900 to-blue-500 pt-32 pb-10 px-10 md:px-20 ">
        <div className="flex flex-col md:flex-row justify-start  md:gap-20">
          <h3 className="font-spacegrotesk font-bold text-3xl">
            Lets Work <br className="hidden md:block" /> Together
          </h3>
          <div className="flex flex-col py-2">
            <p className="font-helvetica text-abouttext font-semibold text-base text-maintext">
              500 Terry Francine Street, <br /> Sydney, AU 94158
            </p>
            <p className="font-helvetica font-semibold text-base text-abouttext text-maintext">
              E-Mail: info@mysite.com
            </p>
            <p className="font-helvetica font-semibold text-abouttext text-base text-maintext">
              Tel: 123-456-7890
            </p>
          </div>
        </div>
        <div className="px-5 md:px-10 py-4">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-4 md:py-12">
              <div className="flex flex-col">
                <label
                  htmlFor="firstname"
                  className="font-raleway text-sm text-maintext"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="outline-none bg-transparent border-b-[1px] border-black hover:border-b-2 w-full"
                />
              </div>
              <div className="flex flex-col">
                {" "}
                <label
                  htmlFor="lastname"
                  className="font-raleway text-sm text-maintext"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  name="lastname"
                  className="outline-none bg-transparent border-b-[1px] border-black hover:border-b-2 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col py-2 md:py-3">
              {" "}
              <label
                htmlFor="email"
                className="font-raleway text-sm text-maintext"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                className="outline-none bg-transparent border-b-[1px] border-black hover:border-b-2 w-full "
              />
            </div>
            <div className="flex flex-col  py-2 md:py-4">
              {" "}
              <label
                htmlFor="message"
                className="font-raleway text-sm text-maintext"
              >
                Message:
              </label>
              <textarea
                cols="5"
                rows="3"
                name="message"
                className="outline-none bg-transparent border-b-[1px] border-black hover:border-b-2 w-full"
              />
            </div>
            <div className="flex justify-end">
              {" "}
              <button className="font-sans text-xs font-bold bg-white text-black hover:bg-[#BE55C6] hover:text-white py-2 px-12 rounded-3xl  ">
                Send
              </button>
            </div>
          </form>
          <div className="py-10 px-20 ">
            <ul className="flex justify-center gap-4  md:gap-8 md:items-center lg:gap-2">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />{" "}
              </li>
              <li>
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BPOsection;
