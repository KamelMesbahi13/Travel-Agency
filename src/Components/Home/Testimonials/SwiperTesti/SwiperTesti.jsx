import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./SwiperTesti.css";
import Loader from "../../../../Ui/Loader/Loader";
import { Autoplay, Navigation, FreeMode } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Main_swiper = () => {
  const Url = "http://localhost:8000/testimonial";
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [error_par, setError_par] = useState("");
  const [status, setStatus] = useState(true);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    setLoader(true);

    try {
      const response = await axios.get(Url);
      const data = response.data;
      setData(data);
      setError("");
      setError_par("");
      setStatus(true);
      setLoader(false);
    } catch (error) {
      const error_msg = error.message;
      setError(error_msg);
      setError_par("Please Try Again");
      setStatus(false);
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="pb-8 shadow-xl">
        <div>
          <div className="mt-4 mb-8 font-bold text-center">
            <h1>Travelers love our locals</h1>
          </div>
          {status ? (
            <div className="text-center">{loader && <Loader />}</div>
          ) : (
            <div className="mt-20 text-center">
              <div className="text-center">{loader && <Loader />}</div>
              <h1 className="font-bold">{error}</h1>
              <p className="mt-4 text-red-500">{error_par}</p>
            </div>
          )}
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation, FreeMode]}
          className="mySwiper w-[70%]"
          slidesPerView={1}
          freeMode={true}
        >
          <div>
            {data.map((prop) => {
              return (
                <SwiperSlide key={prop.id}>
                  <div className="flex flex-col p-8">
                    <img
                      src={prop.Img_stars}
                      className="!w-14 lg:!w-16"
                      alt={prop.Alt_stars}
                    />
                    <div>
                      <h5 className="w-3/4 text-sm font-bold lg:w-full md:text-base lg:text-xl text-main-color">
                        {prop.Title}
                      </h5>
                      <p className="my-2 lg:w-3/4 lg:my-4">{prop.Paragraph}</p>
                    </div>
                    <div className="flex items-center">
                      <div>
                        <LazyLoadImage
                          className="!w-20 md:!w-20 lg:!w-24 my-4 rounded-full"
                          src={prop.Img_person}
                          alt={prop.Alt_person}
                        />
                      </div>
                      <div className="ml-4">
                        <h6 className="font-bold">{prop.Person_name}</h6>
                        <p className="font-light">{prop.Date_place}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Main_swiper;
