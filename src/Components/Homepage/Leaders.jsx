import Medical from "../../assets/Medical.png";
import Transport from "../../assets/transport.png";
import Manufacturing from "../../assets/manufacturing.webp";
import Ecommerce from "../../assets/e-commerce.webp";
import Banking from "../../assets/banking.webp";
import Energy from "../../assets/energy.webp";
import Hospitality from "../../assets/hospitality.webp";
import Retail from "../../Assets/retail.webp";
import Education from "../../Assets/education.webp";
import Telecommunication from "../../assets/telecommunications.webp";

export default function Leaders() {
  return (
    <div>
      <div className="bg-gradient-to-r from-teal-500 to-gray-500 overflow-x-hidden">
        <div>
          <div className="container mx-auto px-4 py-4 md:px-48 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 pb-20">
            
              <div data-aos="fade-up" data-aos-anchor-placement="center-center">
                <h1 className="text-white font-spacegrotesk text-3xl">
                  Trusted Among Industry Leaders
                </h1>
                <p className=" text-white font-helvetica text-base py-3">
                  {` At Scattered Links, we're committed to driving innovation across various industries, providing tailored IT solutions that address unique challenges and unlock opportunities. We take pride in serving:`}
                </p>
              </div>
            
              <div className="hidden md:block"></div>
            </div>
            <div>
              <div
                className="grid grid-cols-2 md:grid-cols-5 justify-center items-center gap-y-24"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <div className="flex flex-col justify-center items-center gap-10 text-center">
                  <img src={Medical} alt="metD" className='w-28 h-28'/>
                  <p className="text-base font-prompt font-bold h-8">
                    Medical Care
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-10 text-center">
                  <img src={Transport} alt="metD" className='w-28 h-28' />
                  <p className="text-base font-prompt font-bold h-8">
                    Transportation & Logistics
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-10 text-center">
                  <img src={Manufacturing} alt="metD" className='w-28 h-28' />
                  <p className="text-base font-prompt font-bold h-8">
                    Manufacturing
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-10 text-center">
                  <img src={Ecommerce} alt="metD" className='w-28 h-28' />
                  <p className="text-base font-prompt font-bold h-8">E-commerce</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-10 text-center">
                  <img src={Banking} alt="metD" className='w-28 h-28' />
                  <p className="text-base font-prompt font-bold h-8">
                    Finance & Banking
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-10 text-center">
                  <img src={Energy} alt="metD" className='w-28 h-28' />
                  <p className="text-base font-prompt font-bold h-8">
                    Energy & Utilities
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-10 text-center">
                  <img src={Hospitality} alt="metD" className='w-28 h-28'/>
                  <p className="text-base font-prompt font-bold h-8">Hospitality</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-10 text-center">
                  <img src={Retail} alt="metD" className='w-28 h-28' />
                  <p className="text-base font-prompt font-bold h-8">Retail</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-10 text-center">
                  <img src={Education} alt="metD" className='w-28 h-28' />
                  <p className="text-base font-prompt font-bold h-8">Education </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-10 text-center">
                  <img src={Telecommunication} alt="metD" className='w-28 h-28'/>
                  <p className="text-base font-prompt font-bold h-8">
                    Telecommunications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave"></div>
    </div>
  );
}
