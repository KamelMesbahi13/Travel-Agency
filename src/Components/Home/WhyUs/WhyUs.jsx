import { useEffect, useState } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loader from "../../../Ui/Loader/Loader";

const WhyUs = () => {
  const Url = "http://localhost:8000/whyUs";
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [error_par, setError_par] = useState("");
  const [loader, setLoader] = useState(false);
  const [status, setStatus] = useState(true);
  const fetchData = async () => {
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
      <div className="my-20">
        <div>
          <div className="text-center">
            <h1 className="font-bold">Why travel with Us?</h1>
          </div>
          <div className="text-center">
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
          <div className="grid items-center grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4 place-items-center">
            {data.map((prop, i) => {
              return (
                <div className="p-8 shadow-xl h-60 md:h-72 textCenter" key={i}>
                  <div>
                    <LazyLoadImage src={prop.Img} alt={prop.Alt} />
                    <h6 className="my-3 text-base font-semibold">
                      {prop.Title}
                    </h6>
                    <p className="font-light">{prop.Paragraph}</p>
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

export default WhyUs;
