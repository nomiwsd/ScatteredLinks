import promotin_inner from "../../Assets/promotin_inner.png";
// import plussvg from "../../Assets/smallbox.svg";
// import { MdOutlineAllInbox } from "react-icons/md";
import { BsBrushFill, BsFolder } from "react-icons/bs";
import { BiBorderInner} from "react-icons/bi";
const Pormotion = () => {
  return (
    <div className="bg-cover bg-center h-auto overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 py-4 md:p-8">
        <div className="px-2 lg:p-20">
          <img
            className="max-w-full h-auto"
            src={promotin_inner}
            alt="BgImage"
          />
        </div>
        <div className="flex flex-col justify-center items-center py-4 md:py-0">
          <div
            className="px-2 lg:mx-20"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2 className=" text-maintext text-4xl font-spacegrotesk font-bold">
              Weaving your digital future
            </h2>
            <p
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="text-maintext text-base font-roboto font-medium py-8"
            >
              {` I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
    `}{" "}
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex justify-center items-center gap-3 my-4"
          >
            <div className="flex items-center">
              <div className="bg-[#D8641E]  rounded p-2">
              <BiBorderInner className='text-white' />
              </div>
              <p className="p-0 ml-2 text-xs">All-In-One Toolkit</p>
            </div>
            <div className="flex items-center">
              <div className="bg-[#D8641E] p-2 rounded">
                <BsFolder className="scale-x-[-1] text-white" />
              </div>
              <p className="p-0 ml-2 text-xs">Integrated File Sharing</p>
            </div>
            <div className="flex items-center">
              <div className="bg-[#D8641E] p-2 rounded">
                <BsBrushFill className='text-white  scale-x-[-1] scale-y-[-1]' />
              </div>
              <p className="p-0 ml-2 text-xs">Total Design Freedom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pormotion;
