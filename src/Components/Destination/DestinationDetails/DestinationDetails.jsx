// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { BiSolidTimeFive } from "react-icons/bi";
// import { FaLocationDot } from "react-icons/fa6";
// import { BsFillPersonFill, BsFillEmojiSmileFill } from "react-icons/bs";
// import "react-lazy-load-image-component/src/effects/blur.css";

// const DestinationDetails = () => {
//   const { destinationId } = useParams();
//   const [destination, setDestination] = useState(null);

//   useEffect(() => {
//     // Fetch destination data from an API
//     axios.get(`http://localhost:8000/offers/${destinationId}`)
//       .then((response) => response.json())
//       .then((data) => setDestination(data));
//   }, [destinationId]);

//   if (!destination) {
//     return <div>Loading...</div>;
//   }

//   const {
//     Destination,
//     Img,
//     Alt,
//     Description,
//     Price,
//     Duration,
//     Information,
//     Num_of_people,
//     Rating,
//   } = destination;

//   return (
//     <>
//       <div className="relative mt-2 lg:mt-8">
//         <div>
//           <div>
//             <div>
//               <LazyLoadImage
//                 className="h-[25vh] sm:h-auto"
//                 effect="blur"
//                 src={ImgBack}
//                 alt="Background"
//               />
//             </div>
//           </div>
//           <div className="container">
//             <div className="flex flex-col lg:mt-12 lg:flex-row">
//               <div className="mt-8">
//                 <div>
//                   <div className="">
//                     <h1 className="font-bold">{Destination}</h1>
//                     <h6 className="mt-1">{Description}</h6>
//                     <div className="grid grid-cols-2 mt-12 gap-y-10">
//                       <div className="flex items-center">
//                         <BiSolidTimeFive className="text-2xl text-main-color" />
//                         <h6 className="ml-2 italic">{Duration}</h6>
//                       </div>
//                       <div className="flex items-center">
//                         <BsFillEmojiSmileFill className="text-2xl text-main-color" />
//                         <h6 className="ml-2 italic">{Rating}</h6>
//                       </div>
//                       <div className="flex items-center">
//                         <BsFillPersonFill className="text-2xl text-main-color" />
//                         <h6 className="ml-2 italic">{Num_of_people}</h6>
//                       </div>
//                       <div className="flex items-center">
//                         <FaLocationDot className="text-2xl text-main-color" />
//                         <h6 className="ml-2 italic">{Destination}</h6>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="w-full mt-12 lg:w-3/4">
//                       <h2 className="mb-4 text-base font-bold md:text-xl lg:text-2xl">
//                         Information
//                       </h2>
//                       <p>{Information}</p>
//                       <div className="mt-4">
//                         <LazyLoadImage src={Img} alt={Alt} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="duration-500 bg-white shadow-lg lg:w-96 hover:shadow-2xl">
//                   <div>
//                     <div className="">
//                       <div className="py-4 text-center text-white bg-main-color">
//                         <h1 className="font-bold">{Price}$</h1>
//                       </div>
//                       <div className="p-8">
//                         <form>
//                           <div>
//                             <input
//                               className="mt-2 border-b-2 outline-none border-main-color bg-[#eee] p-1 w-full"
//                               type="text"
//                               name="text"
//                               id="text"
//                               placeholder="Name"
//                             />
//                           </div>
//                           <div className="my-4">
//                             <input
//                               className="mt-2 border-b-2 outline-none border-main-color bg-[#eee] p-1 w-full"
//                               type="email"
//                               name="email"
//                               id="email"
//                               placeholder="Email"
//                             />
//                           </div>
//                           <div>
//                             <input
//                               className="mt-2 border-b-2 outline-none border-main-color bg-[#eee] p-1 w-full"
//                               type="date"
//                               name="date"
//                               id="date"
//                               placeholder="Date"
//                             />
//                           </div>
//                           <div className="my-4">
//                             <input
//                               className="mt-2 border-b-2 outline-none border-main-color bg-[#eee] p-1 w-full"
//                               type="text"
//                               name="people"
//                               id="people"
//                               placeholder="People"
//                             />
//                           </div>
//                           <div>
//                             <textarea
//                               className="mt-2 border-b-2 outline-none border-main-color bg-[#eee] p-1 w-full"
//                               name="message"
//                               id="message"
//                               placeholder="Why Do You Want To Come ??"
//                               cols="30"
//                               rows="10"
//                             ></textarea>
//                           </div>
//                           <div>
//                             <button className="lock mt-8 px-3 py-2 lg:px-6 lg:py-3 text-sm lg:text-base text-black bg-second-color w-fit duration-500 rounded-sm hover:bg-[#f8aa35c4]">
//                               Submit
//                             </button>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DestinationDetails;

// ------------------ the image wont load(so i used the second code) ------------------

import DestinationData from "./data/data.json";
import ImgBack from "./../../../../src/assets/DestinationBackTwo.jpg";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillPersonFill, BsFillEmojiSmileFill } from "react-icons/bs";
import "react-lazy-load-image-component/src/effects/blur.css";

const DestinationDetails = () => {
  const { destinationId } = useParams();

  const destination = DestinationData.find(
    (destination) => destination.id == destinationId
  );

  const {
    Destination,
    Img,
    Alt,
    Description,
    Price,
    Duration,
    Information,
    Num_of_people,
    Rating,
  } = destination;

  return (
    <>
      <div className="relative mt-2 lg:mt-8">
        <div>
          <div>
            <div>
              <LazyLoadImage
                className="h-[25vh] sm:h-auto"
                effect="blur"
                src={ImgBack}
                alt="Background"
              />
            </div>
          </div>
          <div className="container">
            <div className="flex flex-col lg:mt-12 lg:flex-row">
              <div className="mt-8">
                <div>
                  <div className="">
                    <h1 className="font-bold">{Destination}</h1>
                    <h6 className="mt-1">{Description}</h6>
                    <div className="grid grid-cols-2 mt-12 gap-y-10">
                      <div className="flex items-center">
                        <BiSolidTimeFive className="text-2xl text-main-color" />
                        <h6 className="ml-2 italic">{Duration}</h6>
                      </div>
                      <div className="flex items-center">
                        <BsFillEmojiSmileFill className="text-2xl text-main-color" />
                        <h6 className="ml-2 italic">{Rating}</h6>
                      </div>
                      <div className="flex items-center">
                        <BsFillPersonFill className="text-2xl text-main-color" />
                        <h6 className="ml-2 italic">{Num_of_people}</h6>
                      </div>
                      <div className="flex items-center">
                        <FaLocationDot className="text-2xl text-main-color" />
                        <h6 className="ml-2 italic">{Destination}</h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-full mt-12 lg:w-3/4">
                      <h2 className="mb-4 text-base font-bold md:text-xl lg:text-2xl">
                        Information
                      </h2>
                      <p>{Information}</p>
                      <div className="mt-4">
                        <LazyLoadImage src={Img} alt={Alt} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="duration-500 bg-white shadow-lg lg:w-96 hover:shadow-2xl">
                  <div>
                    <div className="">
                      <div className="py-4 text-center text-white bg-main-color">
                        <h1 className="font-bold">{Price}$</h1>
                      </div>
                      <div className="p-8">
                        <form>
                          <div>
                            <input
                              className="mt-2 border-b-2 outline-none border-main-color bg-[#eee] p-1 w-full"
                              type="text"
                              name="text"
                              id="text"
                              placeholder="Name"
                            />
                          </div>
                          <div className="my-4">
                            <input
                              className="mt-2 border-b-2 outline-none border-main-color bg-[#eee] p-1 w-full"
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                          <div>
                            <input
                              className="mt-2 border-b-2 outline-none border-main-color bg-[#eee] p-1 w-full"
                              type="date"
                              name="date"
                              id="date"
                              placeholder="Date"
                            />
                          </div>
                          <div className="my-4">
                            <input
                              className="mt-2 border-b-2 outline-none border-main-color bg-[#eee] p-1 w-full"
                              type="text"
                              name="people"
                              id="people"
                              placeholder="People"
                            />
                          </div>
                          <div>
                            <textarea
                              className="mt-2 border-b-2 outline-none border-main-color bg-[#eee] p-1 w-full"
                              name="message"
                              id="message"
                              placeholder="Why Do You Want To Come ?"
                              cols="30"
                              rows="10"
                            ></textarea>
                          </div>
                          <div>
                            <button className="lock mt-8 px-3 py-2 lg:px-6 lg:py-3 text-sm lg:text-base text-black bg-second-color w-fit duration-500 rounded-sm hover:bg-[#f8aa35c4]">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationDetails;
