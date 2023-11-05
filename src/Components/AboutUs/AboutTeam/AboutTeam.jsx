import { LazyLoadImage } from "react-lazy-load-image-component";
import Img from "./../../../../src/assets/TeamPic.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";

const AboutTeam = () => {
  return (
    <>
      <div className="mt-20">
        <div>
          <div className="flex flex-col-reverse items-center md:flex-row">
            <div className="relative w-full md:w-3/4">
              <div className="absolute lg:w-[10rem] w-[5rem] h-[5rem] bg-second-color rounded-full left-[60%] bottom-3/4 lg:h-[10rem]"></div>
              <h1 className="mb-4 font-bold">About Team</h1>
              <p className="w-full md:w-3/4">
                Quickly incentivize impactful action items before tactical
                collaboration and idea-sharing. Monotonically engage
                market-driven intellectual capital through wireless
                opportunities. Progressively network performance based services
                for functionalized testing procedures.
              </p>
            </div>
            <div className="w-full md:w-1/2 md:h-1/2">
              <LazyLoadImage
                className="rounded-md shadow-2xl"
                src={Img}
                alt="Team"
                effect="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
