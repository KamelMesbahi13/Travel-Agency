import axios from "axios";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

const BlogDetail = () => {
  const Url = "http://localhost:8000/blog";
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
      <div className="p-8">
        <div>
          <div className="mt-12 font-bold text-center">
            <h1>Our Latest News</h1>
          </div>
          <div className="lg:w-3/4">
            {data.map((prop, i) => {
              return (
                <div
                  className="p-4 my-4 shadow-lg md:p-12 md:my-12 rounded-3xl"
                  key={i}
                >
                  <div>
                    <div>
                      <LazyLoadImage
                        effect="blur"
                        src={prop.Img}
                        alt={prop.Alt}
                      />
                    </div>
                    <div className="mt-4 text-center sm:text-start">
                      <h6 className="text-base font-bold md:text-lg text-main-color">
                        <span className="mr-1 text-second-color">&#8226;</span>
                        {prop.SubTitle}
                      </h6>
                      <p className="my-2 text-sm md:text-base">
                        {prop.Paragraph}
                      </p>
                    </div>
                    <div className="flex flex-col items-center mt-4 sm:flex-row">
                      <img
                        className="w-12 rounded-full md:w-11"
                        src={prop.JournalistPic}
                        alt="Modtel"
                      />
                      <h6 className="mx-2 my-1 md:my-0">{prop.Journalist}</h6>
                      <p className="text-sm md:text-base">{prop.Date}</p>
                    </div>
                    <div className="mt-1 sm:mt-4 textCenter sm:text-start">
                      <Link
                        target="_blank"
                        className="text-sm text-black lg:text-base linkEff hover:text-main-color"
                        to={`/blog/${prop.id}`}
                      >
                        Read More ...
                      </Link>
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

export default BlogDetail;
