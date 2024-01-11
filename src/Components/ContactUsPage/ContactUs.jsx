import contactus from "../../assets/a90f84_c4b982975b9f4eed86b465929c73e7e3~mv2.webp";
import ScrollToTop from "react-scroll-to-top";
const ContactUs = () => {
  return (
    <section className="contactus">
           <ScrollToTop smooth className="px-1" style={{
            backgroundColor:'#000',
            borderRadius:'100%',
            border:'1px solid',
            borderColor:'#ff3d3d'
           }} color="#fff" />
      <div className="flex flex-col justify-center items-center py-20">
        <h2 className="font-spacegrotesk text-4xl md:text-6xl font-normal text-primary ">
          Contact Us
        </h2>
        <p className="text-xs md:text-base text-primary font-novamono font-bold leading-7 md:text-center text-justify px-6 lg:px-52 xl:px-80 ">
          Our philosophy is rooted in the idea that by weaving together the
          diverse threads of innovation,  we can create a canvas of
          success that goes beyond expectations, for further fill out the
          following
          form.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src={contactus} alt="person"  className="w-full h-full"/>
        </div>
        <div className="px-5 md:px-10 py-14 bg-bgsecondary ">
          <p className="font-novamono text-base text-primary">
            500 Terry Francine Street, Sydney, AU 94158
          </p>
          <div className="flex  flex-col md:flex-row py-2">
            <p className="font-novamono text-base text-primary w-44 md:border-r-[1px] border-black  ">
              sl@gmail.com
            </p>
            <p className="font-novamono text-base text-primary md:px-2 lg:px-6">
              123-456-7890
            </p>
          </div>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-4 md:py-12">
              <div className="flex flex-col">
                <label
                  htmlFor="firstname"
                  className="font-raleway text-sm text-primary"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstname"
                  className=" bg-bgsecondary outline-none border-b-[1px] border-black hover:border-b-2 w-full"
                />
              </div>
              <div className="flex flex-col">
                {" "}
                <label
                  htmlFor="lastname"
                  className="font-raleway text-sm text-primary"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  name="lastname"
                  className=" bg-bgsecondary outline-none border-b-[1px] border-black hover:border-b-2 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col py-2 md:py-3">
              {" "}
              <label
                htmlFor="email"
                className="font-raleway text-sm text-primary"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                className=" bg-bgsecondary outline-none border-b-[1px] border-black hover:border-b-2 w-full "/>
            </div>
            <div className="flex flex-col  py-2 md:py-4">
              {" "}
              <label
                htmlFor="message"
                className="font-raleway text-sm text-primary"
              >
                Message:
              </label>
              <textarea
                cols="5"
                rows="3"
                name="message"
                className=" bg-bgsecondary outline-none border-b-[1px] border-black hover:border-b-2 w-full"
              />
            </div>
            <button className="font-sans text-[#fff] text-xs font-bold bg-[#2f675b] hover:bg-[#81DECD] hover:text-[#000] py-2 px-12 rounded-3xl  ">
              Send
            </button>
          </form>
          <div className="py-10">
            <ul className="flex flex-col gap-4 md:flex-row md:gap-4 lg:gap-8">
                <li><a href="#fb" className="underline underline-offset-1 font-mono text-base text-primary">Facebook</a></li>
                <li><a href="#twitter" className="underline underline-offset-1 font-mono text-base text-primary">Twitter</a></li>
                <li><a href="#insta" className="underline underline-offset-1 font-mono text-base text-primary">Instagram</a></li>
                <li><a href="#linkedin" className="underline underline-offset-1 font-mono text-base text-primary">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#CBD2D3] my-1">
        <div className="text-center py-4 md:py-20">
            <h2 className="text-5xl text-primary font-normal font-spacegrotesk text-center">Opening Hours</h2>
        </div>
        <div className=" py-4 md:py-20 px-4">
            <div className="flex justify-start gap-20">
                <p className="text-base font-raleway font-medium">Mon-Fri</p>
                <p className="text-base font-raleway font-medium">8:00 am – 8:00 pm</p>
            </div>
            <div className="flex justify-start gap-[75px] pt-8 pb-3">
                <p className="text-base font-raleway font-medium">Saturday</p>
                <p className="text-base font-raleway font-medium">9:00 am – 7:00 pm</p>
            </div>
            <div className="flex justify-start gap-[85px]">
                <p className="text-base font-raleway font-medium">Sunday</p>
                <p className="text-base font-raleway font-medium">9:00 am – 9:00 pm</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
