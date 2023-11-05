import axios from "axios";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import Loader from "../../../Ui/Loader/Loader";

const Tranding = () => {
  const Url = "http://localhost:8000/popularTours";
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
      <div className="p-8 mt-20 bg-white shadow-xl">
        <div>
          <div className="items-center md:flex textCenter md:text-start">
            <h1 className="font-bold md:mr-8">Popular Destinations</h1>
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

        <div className="grid grid-cols-1 mt-8 gap-x-6 gap-y-8 place-items-center md:place-items-start md:grid-cols-2">
          {data.map(({ id, Img, Alt, Tours, Location_Name, Locations }) => {
            return (
              <div key={id}>
                <div>
                  <div className="p-4 shadow-xl lg:w-[30rem]">
                    <LazyLoadImage
                      className="lg:w-[30rem]"
                      src={Img}
                      alt={Alt}
                    />
                    <div className="flex items-center justify-between mt-2">
                      <h6 className="font-bold">{Location_Name}</h6>
                      <h6 className="p-1 italic font-bold text-white bg-main-color">
                        {Tours} Tours
                      </h6>
                    </div>
                    <div className="grid justify-between grid-cols-2 mt-4">
                      <h6>{Locations.Destination_One}</h6>
                      <h6>{Locations.Destination_Two}</h6>
                      <h6>{Locations.Destination_Three}</h6>
                      <h6>{Locations.Destination_Four}</h6>
                      <h6>{Locations.Destination_Five}</h6>
                    </div>
                    <div className="mt-4">
                      <Link
                        to="/destination"
                        target="_blank"
                        className="flex justify-center duration-500 hover:text-second-color md:justify-normal"
                      >
                        View All The Tours
                        <i>
                          <IoIosArrowDropright className="ml-1 text-2xl" />
                        </i>
                      </Link>{" "}
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

export default Tranding;
