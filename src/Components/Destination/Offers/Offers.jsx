import axios from "axios";
import { useState, useEffect } from "react";
import { FiMapPin } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

const Offers = () => {
  const Url = "http://localhost:8000/offers";
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(Url);
      const data = response.data;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-20">
        <div className="grid grid-cols-1 gap-4 bg-white sm:grid-cols-2 md:grid-cols-3">
          {data.map((prop, i) => {
            return (
              <div key={i}>
                <div className="relative pb-4 box_offer">
                  <LazyLoadImage src={prop.Img} effect="blur" alt={prop.Alt} />
                  <div className="px-3 py-4 duration-500">
                    <div className="flex items-center mb-2 font-bold">
                      <i className="mr-2 text-xl md:text-2xl text-main-color">
                        <FiMapPin />
                      </i>
                      <h6 className="text-base lg:text-xl">
                        {prop.Destination}
                      </h6>
                    </div>
                    <div className="mb-4 text-sm md:text-base">
                      <p className="mb-1">{prop.Num_of_tours}</p>
                      <p className="font-light">{prop.Description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link
                        className="block px-3 py-2 lg:px-6 lg:py-3 text-sm lg:text-base text-black bg-second-color w-fit duration-500 rounded-sm hover:bg-[#f8aa35c4]"
                        to={`/destination/${prop.id}`}
                      >
                        Details
                      </Link>
                      <div className="flex items-center justify-between">
                        <p className="text-sm lg:text-base">Stars At:</p>
                        <h6 className="ml-1 font-serif text-base italic lg:text-xl">
                          {prop.price}$
                        </h6>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Offers;
