import { Swiper, SwiperSlide } from "swiper/react";
import Places from "./Data/Data.json";
import "swiper/css";
import "./Swiper.css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="h-[50vh] sm:h-[80vh] lg:h-[85vh] w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Places.map(({ id, image_swiper, alt_swiper, place }) => {
            return (
              <SwiperSlide className="mt-8" key={id}>
                <div>
                  <img
                    className="h-[60vh] sm:h-[70vh] lg:h-[85vh]"
                    src={image_swiper}
                    alt={alt_swiper}
                  />
                  <div className="absolute text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 sm:top-1/2 left-1/2">
                    <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:4xl lg:text-5xl">
                      {place}
                    </h1>

                    <Link
                      to="/destination"
                      target="_blank"
                      className="px-4 py-2 text-sm font-semibold text-black duration-500 bg-white rounded-sm md:px-6 md:py-3 hover:bg-main-color hover:text-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
