import { useState, useEffect } from "react";
import projectsbg from "../../Assets/Projectsbg.webp";
import mernprojects from "../../Assets/MernProjects.webp";
import phpprojects from "../../Assets/PhpProjects.webp";
import ecommerprojects from "../../Assets/EcommerceProjects.webp";
import bpoprojects from "../../Assets/BPO.webp";
const Projects = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section>
      <div className="relative">
        <div className="lg:h-screen w-full flex justify-center items-center overflow-hidden">
          <div
            className={`image lg:transition-transform lg:duration-300 lg:ease-in-out lg:transform lg:scale-${
              1.5 + scrollPosition * 0.001
            }`}
            // style={{ transform: `scale(${1.5 + scrollPosition * 0.001})` }}
          >
            <img
              src={projectsbg}
              alt="ZoomingImage"
              className="max-w-full md:w-screen lg:h-screen"
            />
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="lg:absolute lg:-translate-y-24 flex flex-col py-20 border-b-[1px] border-gray-500 bg-[#fff] w-full md:w-3/4 px-4 md:px-10">
            <h2 className="font-spacegrotesk text-4xl md:text-6xl font-medium text-primary px-4 md:px-10">
              Our Work
            </h2>
            <p className="text-xs md:text-base text-primary font-raleway font-bold leading-7  text-justify px-4 md:px-10 pt-4 md:pt-8">
              {` Whether you're a startup looking to establish a digital presence
              or an established enterprise aiming for digital transformation,
              Scattered Links is here to weave success with you. Join us on a
              journey where every thread counts, and together, we'll create a
              tapestry of success. `}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 md:gap-2 mt-10 md:mt-44 my-10 md:px-6 lg:mx-40 pb-20 border-b-[1px] border-gray-500 px-4">
          <div className="flex justify-center">
            <img
              src={mernprojects}
              alt="MernProjects"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
          <div
            className="flex flex-col justify-center px-2 py-2 "
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <h2 className="text-primary font-spacegrotesk text-3xl">01</h2>
            <h2 className="text-primary font-spacegrotesk text-3xl pb-8">
              Mern Projects
            </h2>
            <p className="text-primary font-raleway text-left  text-base  leading-7  md:pl-0 md:pr-14">
              {" "}
              Explore our latest achievement – a sleek website powered by the
              MERN stack! Our team seamlessly integrated MongoDB for efficient
              data management, Node.js and Express.js for a robust backend, and
              React.js for a modern and intuitive frontend.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-2 justify-center my-10 md:px-6 lg:mx-40 pb-20 border-b-[1px]  border-gray-500">
          <div
            className="flex flex-col justify-center px-6 order-2 md:order-1"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <h2 className="text-primary font-spacegrotesk text-3xl">02</h2>
            <h2 className="text-primary font-spacegrotesk text-3xl pb-8">
              Php Projects
            </h2>
            <p className="text-primary font-raleway text-left  text-base  leading-7">
              Introducing our latest PHP website project, meticulously crafted
              for optimal performance and user engagement. Leveraging the
              versatility of PHP, our developers have created a dynamic and
              efficient web solution.{" "}
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src={phpprojects}
              alt="BPOProjects"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 justify-center my-10 md:px-6 lg:mx-40 pb-20 border-b-[1px]  border-gray-500">
          <div className="flex justify-center">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={ecommerprojects}
              alt="EcommerceProjects"
            />
          </div>
          <div
            className="flex flex-col justify-center px-6 "
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <h2 className="text-primary font-spacegrotesk text-3xl">03</h2>
            <h2 className="text-primary font-spacegrotesk text-3xl pb-8">
              ECommerce Projects
            </h2>
            <p className="text-primary font-raleway text-left  text-base  leading-7 xl:pr-14">
              Embark on a seamless shopping experience with our latest
              E-commerce website! Crafted with precision and powered by
              cutting-edge technology, our platform offers a user-friendly
              interface, secure transactions, and a visually appealing design.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 justify-center my-10 md:px-6 lg:mx-40 pb-20 border-b-[1px]  border-gray-500">
          <div className="flex justify-center order-1 md:order-2">
            <img
              src={bpoprojects}
              alt="BPOProjects"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
          <div
            className="flex flex-col justify-center px-6 order-2 md:order-1"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <h2 className="text-primary font-spacegrotesk text-3xl">04</h2>
            <h2 className="text-primary font-spacegrotesk text-3xl pb-8">
              BPO Projects
            </h2>
            <p className="text-primary font-raleway text-left text-base  leading-7">
              {" "}
              Discover efficiency and excellence in our latest BPO project! Our
              team has meticulously crafted a Business Process Outsourcing
              solution that promises streamlined operations, exceptional
              customer support, and cutting-edge technology integration.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
