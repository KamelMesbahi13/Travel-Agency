import Img from "./../../../../src/assets/DestinationBack.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = () => {
  return (
    <>
      <div name="destination">
        <div>
          <div className="relative">
            <img
              className="w-full sm:h-[40vh] h-[30vh] md:h-full"
              src={Img}
              alt="Destination"
            />
            <div className="absolute font-bold text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h1>Destination</h1>
              <p className="my-2 text-sm md:my-4 md:text-base">
                Explore Our Tours By Destinations
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
