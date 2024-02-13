import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import ImgOne from "./../../../../src/assets/AboutUsOne.jpg";
import ImgTwo from "./../../../../src/assets/AboutUsTwo.jpg";

const Header = () => {
  return (
    <>
      <div className="mt-4 lg:mt-16">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full">
            <h1 className="mt-4 font-bold lg:mt-0">
              World Best Travel Agency Company Since 2008
            </h1>
            <p className="my-4 text-sm lg:w-3/4 lg:my-8 lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              facere aspernatur aliquam magnam delectus asperiores dolorum
              maxime doloremque saepe nihil quae unde atque quasi laboriosam
              veritatis, exercitationem magni, illo harum molestiae velit?
              Labore voluptas tenetur, earum iusto excepturi sequi quas expedita
              dolorem ab. Asperiores necessitatibus amet natus distinctio
              aliquid? Omnis. maxime doloremque saepe nihil quae unde atque
              quasi laboriosam veritatis, exercitationem magni, illo harum
              molestiae velit? Labore voluptas tenetur. earum iusto excepturi
              sequi quas expedita dolorem ab. Asperiores necessitatibus amet
              natus distinctio aliquid? Omnis.maxime doloremque saepe nihil quae
              unde atque quasi laboriosam veritatis, exercitationem magni, illo
              harum molestiae velit? Labore voluptas tenetur, earum iusto
              excepturi sequi quas expedita dolorem ab. Asperiores
              necessitatibus amet natus distinctio aliquid? Omnis.
            </p>
            <div>
              <Link className="block px-3 py-2 lg:px-6 lg:py-3 text-sm lg:text-base text-black bg-second-color w-fit duration-500 rounded-sm hover:bg-[#f8aa35c4]">
                Find Tours
              </Link>
            </div>
          </div>
          <div className="relative lg:w-[90%]">
            <LazyLoadImage
              className="relative hidden lg:block shadow-2xl lg:top-[15%]"
              src={ImgOne}
            />
            <LazyLoadImage
              className="top-0 h-[30vh] mx-auto sm:h-[50vh] md:h-[55vh] lg:h-auto lg:absolute lg:w-[30rem] lg:left-[50%] lg:-translate-x-1/2 shadow-2xl duration-500 lg:hover:-translate-x-[60%] lg:hover:-translate-y-[10%]"
              src={ImgTwo}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
