import axios from "axios";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Instagram from "./../../../../src/assets/Instagram.png";
import Facebook from "./../../../../src/assets/Facebook.png";
import Twitter from "./../../../../src/assets/Twitter.png";

const Team = () => {
  const Url = "http://localhost:8000/team";
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
      <div className="relative my-28">
        <div>
          <div className="textCenter">
            <div className="mb-8">
              <h1 className="font-bold">Our Team</h1>
            </div>
            <div className="container">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                <div className="w-full bg-main-color h-[15rem] absolute -z-10"></div>
                {data.map((prop, i) => {
                  return (
                    <div
                      key={i}
                      className="px-4 py-6 duration-500 bg-white rounded-md shadow-md hover:shadow-2xl"
                    >
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="rounded-full w-36 h-36"
                          src={prop.Img}
                          alt={prop.Alt}
                        />
                      </div>
                      <div>
                        <h6 className="font-bold">{prop.Name}</h6>
                        <h6 className="mt-2">{prop.Job}</h6>
                        <p className="my-2">{prop.Description}</p>
                      </div>
                      <div className="flex justify-center w-6 mt-4">
                        <img src={Instagram} alt="Instagram" />
                        <img className="mx-2" src={Facebook} alt="Facebook" />
                        <img src={Twitter} alt="Twitter" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
