import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../../Ui/Loader/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

const Advice = () => {
  const Url = "http://localhost:8000/advice";
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [error_par, setError_par] = useState("");
  const [loader, setLoader] = useState(false);
  const [status, setStatus] = useState(true);

  const fetchData = async () => {
    setLoader(true);
    try {
      const response = await axios.get(Url);
      const data = response.data;
      setData(data);
      setError("");
      setError_par("");
      setLoader(false);
      setStatus(true);
    } catch (error) {
      const error_msg = error.message;
      setError(error_msg);
      setError_par("Please Try Again");
      setLoader(false);
      setStatus(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-20">
        <div>
          <div className="text-center">
            <h1 className="mb-12 font-bold">Travel tips and advice</h1>
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
          <div className="grid grid-cols-1 gap-4 mt-8 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map((prop, i) => {
              return (
                <div className="relative box" key={i}>
                  <div>
                    <LazyLoadImage
                      effect="blur"
                      className="lg:h-[25rem]"
                      src={prop.Img}
                      alt={prop.Alt}
                    />
                  </div>
                  <div className="absolute px-2 font-bold text-white -translate-y-1/2 top-1/2">
                    <div className="flex items-center p-2 mb-2 lg:mb-4 bg-second-color w-fit">
                      <h6>
                        <span className="mr-1 text-main-color">&#8226;</span>
                        {prop.Subtitle}
                      </h6>
                    </div>
                    <div className="w-3/4">
                      <Link className="mb-2 duration-500 lg:mb-4 lg:text-lg hover:text-gray-300">
                        {prop.Title}
                      </Link>
                      <p className="italic">{prop.Date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Advice;
