import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const Url = "http://localhost:8000/footer";

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
      <div className="p-8 mt-20 text-white bg-main-color">
        <div>
          <div className="items-center md:flex justify-evenly gap-x-20">
            {data.map((prop, i) => {
              return (
                <div key={i}>
                  <div className="md:my-4">
                    <h6 className="mb-4 font-bold md:mb-6">{prop.title}</h6>
                  </div>
                  <div className="flex flex-wrap md:flex-nowrap md:flex-col">
                    <Link className="text-sm md:mt-4 md:text-base">
                      {prop.sectionOne}
                    </Link>
                    <Link className="mx-4 text-sm md:mx-0 md:my-4 md:text-base">
                      {prop.sectionTwo}
                    </Link>
                    <Link className="text-sm md:text-base">
                      {prop.sectionThree}
                    </Link>
                    <Link className="mx-4 text-sm md:mx-0 md:my-4 md:text-base">
                      {prop.sectionFour}
                    </Link>
                    <Link className="text-sm md:text-base">
                      {prop.sectionFive}
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <img
                        className="w-20 mx-auto my-4 md:w-28 md:my-0 md:mx-0"
                        src={prop.logo_footer}
                      />
                    </Link>
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

export default Footer;
