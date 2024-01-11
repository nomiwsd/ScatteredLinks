import { useState, useEffect } from "react";
import Bgimg from "../../assets/aboutheader.png";
import people from "../../assets/people.png";
import philosophy from "../../assets/hand.png";
import leaderimg from "../../assets/Img_4499.webp";
import CountUp from "react-countup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderbg from "../../assets/sliderbg.webp";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaThumbsUp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
const About = () => {
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
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "Scattered Links is our go-to resource provider. Their understanding of our staffing needs and diverse, skilled talent pool have been invaluable. Trustworthy partner for success.",
      author: `Lisa Driver, MI`,
    },
    {
      id: 2,
      text: "Scattered Links revolutionized our customer support with impeccable Inbound BPO services. Professionalism and efficiency surpassed expectations. Highly recommended",
      author: "Don Francis, NY.",
    },
    {
      id: 3,
      text: "Scattered Links delivered stunning web solutions with tech prowess and punctuality. Smooth communication made the process a breeze. Looking forward to more collaborations.",
      author: "Alexa Young, AU.",
    },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <div
        id="about-header"
        className="h-[500px] bg-cover bg-center bg-fixed text-white flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${Bgimg})`,
        }}
      >
        <div className="container">
          <h1 className="text-abouttext font-spinnaker text-4xl md:text-6xl px-4">Who We Are</h1>
          <p className=" text-bgsecondary text-center font-raleway text-base md:text-lg font-bold px-4">
            Welcome to Scattered Links, where innovation meets integration. We
            are a leading IT solutions
            <br className='hidden lg:block'/>provider dedicated to seamlessly connecting diverse elements
            of technology to empower your
            <br className='hidden lg:block'/>business. At Scattered Links, we understand that success lies
            in the harmonious collaboration of
            <br className='hidden lg:block'/>ideas, technologies, and expertise.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 m-0">
        <div
          className={`h-[500px] m-0 transition-opacity duration-300 ease-in-out ${
            scrollPosition > 600 && scrollPosition < 900
              ? "opacity-50"
              : "opacity-100"
          }`}
          style={{ background: `url(${people}) center/cover no-repeat` }}
        ></div>
        <div>
          <div
            id="about-header"
            className="h-[500px] bg-white text-black flex flex-col items-center justify-center text-center px-4" >
            <h1 className="font-spinnaker text-3xl md:text-4xl">Our Story</h1>
            <p
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="text-black font-raleway font-medium text-base py-3"
            >
              In the digital age, businesses are faced with a myriad of <br className='hidden lg:block'/>{" "}
              challenges and opportunities.Scattered Links was born <br className='hidden lg:block'/>out
              of the vision to seamlessly connect the dots to <br className='hidden lg:block'/>transform
              challenges into opportunities and <br className='hidden lg:block'/>opportunities into
              success stories. Our journey began
              <br className='hidden lg:block'/>with a commitment to becoming more than just an IT
              <br className='hidden lg:block'/>solutions provider; we aimed to be architects of digital
              <br className='hidden lg:block'/>excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 m-0">
        <div className='order-2 md:order-1'>
          <div className="h-[500px] bg-white text-black flex flex-col items-center justify-center text-center px-4 ">
            <h1 className="font-spinnaker text-3xl md:text-4xl">
              Our Philosphy
            </h1>
            <p
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="text-black font-raleway font-medium text-base py-3"
            >
              At Scattered Links, we believe in the power of unity. We
              <br className='hidden lg:block'/>understand that each business is a unique tapestry of
              <br className='hidden lg:block'/>goals, challenges, and aspirations. Our philosophy is
              <br className='hidden lg:block'/>rooted in the idea that by weaving together the diverse
              <br className='hidden lg:block'/>threads of innovation, we can create a canvas of
              <br className='hidden lg:block'/>success that goes beyond expectations
            </p>
          </div>
        </div>
        <div
          className={`h-[500px] m-0 order-1 md:order-2 transition-opacity duration-300 ease-in-out ${
            scrollPosition > 600 && scrollPosition < 900
              ? "opacity-50"
              : "opacity-100"
          }`}
          style={{ background: `url(${philosophy}) center/cover no-repeat` }}
        ></div>
      </div>
      {/* Leadership part */}
      <div className="px-4 md:px-10 lg:px-40 py-20 aboutsect my-3">
        <h1 className="font-spinnaker text-4xl font-bold text-center py-6 text-primary">
          Our Leadership
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <img
            data-aos="zoom-in-up"
            data-duration='2000'
            src={leaderimg}
            alt="Imagetobemasked"
            className="w-full h-full rounded-t-full"
          />
          <div className="bg-white flex flex-col gap-10 py-20 px-4 lg:px-10 z-20 md:-translate-x-16">
            <p
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="font-spacegrotesk text-2xl text-primary font-bold"
            >{`"In challenges, we discover our greatest strengths. Embrace the journey, embrace success."`}</p>
            <hr className="w-16 text-primary" />
            <h3
              data-aos="fade-right"
              data-duration='1000'
              className="font-grotesk font-bold text-xl text-primary"
            >
              Mumtaz Alam, Director
            </h3>
          </div>
        </div>
      </div>
      {/* couter part */}
      <div className="Countersect text-white">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div style={{ textAlign: "center", padding: "20px" }}>
            <div style={{ fontSize: "50px" }}>
              <CountUp start={0} end={10} duration={2} />+
            </div>
            <div>Experience</div>
          </div>
          <div style={{ textAlign: "center", padding: "20px" }}>
            <div style={{ fontSize: "50px" }}>
              <CountUp start={0} end={5} duration={2} />+
            </div>
            <div>Awards Won</div>
          </div>
          <div style={{ textAlign: "center", padding: "20px" }}>
            <div style={{ fontSize: "50px" }}>
              <CountUp start={0} end={500} duration={2} />+
            </div>
            <div>Projects Completed</div>
          </div>
          <div style={{ textAlign: "center", padding: "20px" }}>
            <div style={{ fontSize: "50px" }}>
              <CountUp start={0} end={100} duration={2} />+
            </div>
            <div>Success Rate</div>
          </div>
        </div>
      </div>
      {/* Slider Part */}
      <div
        className="px-8 md:px-0 flex justify-center items-center"
        style={{
          position: "relative",
          background: `url(${sliderbg}) center/cover no-repeat`,
          height: "400px",
        }}
      >
        {/* White background for testimonials */}
        <div className="absolute w-72 h-72 md:w-full md:h-80 flex flex-col justify-center bg-white text-black md:p-10 rounded-tr-3xl rounded-bl-3xl md:max-w-[600px] text-center px-6 py-2">
          {/* Slider */}
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex gap-8">
                <h3 className="text-sm md:text-lg font-spacegrotesk">
                  {testimonial.text}
                </h3>
                <p className="text-base font-helvetica py-3">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Contact part  */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-[1px] border-solid border-balck ">
        {/* First div */}
        <div className="flex flex-col justify-center items-center py-10 px-5 gap-3 bg-white text-center border-[1px] border-solid border-black">
          <FaMapMarkerAlt size={30} />
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Address</p>
          <div className="h-16">
            <p className="text-xl font-spacegrotesk font-bold">
              500 Terry Francine St.
            </p>
            <p className="text-base font-helvetica">Sydney, NA 94158</p>
          </div>
        </div>

        {/* Second div */}
        <div className="flex flex-col justify-center items-center py-10 px-5 gap-3 bg-white text-center border-[1px] border-solid border-black">
          <FaPhone size={30} />
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Phone</p>
          <div className="h-16">
            <p className="text-xl font-spacegrotesk font-bold">123-456-7890</p>
          </div>
        </div>

        {/* Third div */}
        <div className="flex flex-col justify-center items-center py-10 px-5 gap-3 bg-white text-center border-[1px] border-solid border-black">
          <FaEnvelope size={30} />
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Email</p>
          <div className="h-16">
            <p className="text-xl font-spacegrotesk font-bold">sl@gmail.com</p>
          </div>
        </div>

        {/* Fourth div */}
        <div className="flex flex-col justify-center items-center gap-3 py-10 px-5 bg-white text-center border-[1px] border-solid border-black ">
          <FaThumbsUp size={30} />
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Connect</p>
          <div className="flex gap-5 h-16">
            <a
              style={{ color: "black" }}
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} style={{ marginRight: "5px" }} />
            </a>
            <a
              style={{ color: "black" }}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} style={{ marginRight: "5px" }} />
            </a>
            <a
              style={{ color: "black" }}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} style={{ marginRight: "5px" }} />
            </a>
            <a
              style={{ color: "black" }}
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
