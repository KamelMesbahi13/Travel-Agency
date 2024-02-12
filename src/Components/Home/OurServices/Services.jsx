import dailyData from "./Data/Data.json";
import { Link } from "react-router-dom";
import ImgFacebook from "../../../../src/assets/facebook.png";
import ImgTwitter from "../../../../src/assets/Twitter.png";
import ImgInstagram from "../../../../src/assets/Instagram.png";

const DailyTrips = () => {
  const daily_data = dailyData.map(({ id, title, image, alt, sub_title }) => {
    return (
      <div key={id}>
        <div className="overflow-hidden duration-500">
          <img
            className="transition-all duration-1000 hover:scale-110"
            src={image}
            alt={alt}
          />
        </div>
        <div className="mt-3 text-center lg:text-left">
          <h3 className="text-sm font-bold sm:text-lg lg:text-sm">{title}</h3>
          <h6 className="text-sm font-light tracking-widest">{sub_title}</h6>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="mt-28">
        <div className="justify-between lg:flex">
          <div className="lg:w-full">
            <div className="mb-4 text-center lg:mr-4 lg:text-left">
              <h1 className="mb-4 font-bold">Top Daily Trips</h1>
              <p className="font-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
                voluptates!
              </p>
            </div>
            <div className="lg:mr-8">
              <p className="mb-8 lg:mb-0 lg:text-sm lg:w-[90%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos
                possimus exercitationem nulla, vitae molestiae perspiciatis!
                Quis consequuntur Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vel eos possimus exercitationem nulla, vitae
                molestiae perspiciatis! Quis consequuntur facilis, voluptates
                quidem laboriosam mollitia non voluptatem amet temporibus,
                fugiat autem quisquam ut repellat deserunt porro asperiores
                deleniti rem ducimus! In officiis quisquam reprehenderit vero
                laudantium repellendus non, porro necessitatibus alias repellat!
                Aut obcaecati, doloremque dolores aliquam ex eveniet voluptatem
                eaque deserunt! facilis, voluptates quidem laboriosam mollitia
                non voluptatem amet temporibus, fugiat autem quisquam ut
                repellat deserunt porro asperiores deleniti rem ducimus! In
                officiis quisquam reprehenderit vero laudantium repellendus non,
                porro necessitatibus alias repellat! Aut obcaecati, doloremque
                dolores aliquam ex eveniet voluptatem eaque deserunt!
              </p>
              <div>
                <div className="flex w-24 mt-12 mb-8 lg:mb-0">
                  <Link>
                    {" "}
                    <img src={ImgFacebook} alt="Facebook" />{" "}
                  </Link>
                  <Link className="mx-2">
                    {" "}
                    <img src={ImgInstagram} alt="Instagram" />
                  </Link>
                  <Link>
                    <img src={ImgTwitter} alt="Twitter" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-4 bg-white lg:grid md:grid-cols-2">
            {daily_data}
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyTrips;
