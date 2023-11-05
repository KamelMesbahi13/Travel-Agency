import { LazyLoadImage } from "react-lazy-load-image-component";
import Img from "./../../../../src/assets/BlogBackTwo.png";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = () => {
  return (
    <>
      <div>
        <div>
          <div className="relative">
            <LazyLoadImage effect="blur" src={Img} alt="Blog Background" />
            <h1 className="absolute font-bold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              Blog
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
