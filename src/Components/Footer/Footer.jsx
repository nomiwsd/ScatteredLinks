import { FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import logo from "../../assets/scatteredlinks.png";
const Footer = () => {
  return (
    <div>
      <footer className="bg-footerbg text-black ">
        <div className="container mx-auto pt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 py-4 px-4">
            <div>
              <div className="flex justify-start">
                <img
                  src={logo}
                  alt="Logo"
                  //   style={{ height: "250px", width: "250px",border:"1px solid red" }}
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 px-6 lg:mx-16 lg:gap-8">
            <div className="md:h-56 flex flex-col">
              <h4 className="text-primary text-base font-semibold font-helvetica">Contact</h4>
              <p className="text-primary">
                500 Terry Francine Street
                <br />
                San Francisco, CA 94158
              </p>
              <p className="text-primary py-1">
                General Inquiries:
                <br />
                123-456-7890
              </p>
            </div>
            <div className="md:h-56 flex flex-col">
              <p className="text-primary text-base font-helvetica font-semibold">Sales</p>
              <p className="text-primary">info@mysite.com </p>
              <p className="text-primary py-2">
                Customer Care:
                <br />
                info@mysite.com
              </p>
            </div>
            <div className="md:h-56 flex flex-col ">
              <div className="QuickLink">
                <h4 className="text-primary text-base font-semibold font-helvetica">Quick Links</h4>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li className="mt-3">
                    <a className="text-primary underline" href="#sd">
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-primary underline" href="#sd">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <div className="Follow_Footer">
                <h4 className="text-primary text-base font-semibold font-helvetica">Follow</h4>
                <p className="text-primary">
                  Sign up to get the latest <br /> news on our product.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    className="border-black border-2"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <button className=" bg-homebtn text-white hover:bg-[#D8641E] hover:text-black py-2 px-3">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-4 md:mx-16">
              <div className="Follow_Footer">
                <h4 className="text-primary text-base font-semibold font-helvetica">Connect</h4>
                <div className="social-icons">
                  <a
                    href="#"
                    target="_blank"
                    style={{
                      display: "flex",
                      marginBottom: "5px",
                      color: "#304a4d",
                      gap:'4px',
                    }}
                  >
                    <FaLinkedin className='flex lg:hidden' style={{ fontSize: "20px" }} />Linkedin
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    style={{
                      display: "flex",
                      marginBottom: "5px",
                      color: "#304a4d",
                      gap:'4px',
                    }}
                  >
                    <FaYoutube className='flex lg:hidden' style={{ fontSize: "20px" }} />
                  Youtube
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    style={{
                      display: "flex",
                      marginBottom: "5px",
                      color: "#304a4d",
                      gap:'4px',
                    }}
                  >
                    <FaFacebook className='flex lg:hidden' style={{ fontSize: "20px" }} />
                  Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full bg-primary text-white text-center p-3">
        <p className="text-center">@2023 Scattered Links</p>
      </div>
    </div>
  );
};

export default Footer;
