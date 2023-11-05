import { LazyLoadImage } from "react-lazy-load-image-component";
import Img from "./../../../src/assets/404Error.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="bg-[#e8e8e8]">
        <div>
          <div className="text-center">
            <div className="w-full">
              <Link to="/">
                <LazyLoadImage src={Img} alt="Error" />
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
