import { LazyLoadImage } from "react-lazy-load-image-component";
import Img from "./../../../../src/assets/ContactUs.jpeg";

const Header = () => {
  return (
    <>
      <div className="my-12 md:my-20">
        <div className="flex flex-col-reverse lg:flex-row">
          <div>
            <div className="relative">
              <h1 className="font-bold">Travel Makes You Happy</h1>
              <p className="my-4 text-sm lg:w-3/4 lg:my-8 lg:text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                aperiam mollitia repellendus omnis animi sapiente tempore ipsum
                dolor aut inventore.
              </p>
              <svg
                className="absolute w-1/2 top-0 -z-10 md:top-1/2 left-[40%]"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#F8AB35"
                  d="M52.2,-43.8C67.8,-36.5,80.9,-18.2,83.4,2.4C85.8,23.1,77.6,46.3,61.9,60.9C46.3,75.5,23.1,81.5,5.4,76.1C-12.3,70.8,-24.7,53.9,-32.4,39.3C-40.1,24.7,-43.1,12.3,-45.3,-2.2C-47.5,-16.8,-48.9,-33.5,-41.2,-40.9C-33.5,-48.2,-16.8,-46.1,0.7,-46.9C18.2,-47.6,36.5,-51.2,52.2,-43.8Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
          <div className="relative md:w-[90%] w-full mb-4 md:mb-0">
            <LazyLoadImage
              src={Img}
              className="h-[30vh] rounded-md shadow-2xl w-full sm:h-[50vh] md:h-[55vh] lg:h-auto"
              alt="Contact-Us"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
