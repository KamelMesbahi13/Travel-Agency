// import ImgBack from "./../../../../src/assets/BlogBackThree.jpg";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { useParams } from "react-router-dom";

// const BlogDetails = () => {
//   const { blogId } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/blog/${blogId}`)
//       .then((response) => {
//         setBlog(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [blogId]);

//   if (!blog) {
//     return <div>Loading...</div>;
//   }

//   const { Title, Paragraph, Img, Alt, JournalistPic, Journalist, Date } = blog;

//   return (
//     <>
//       <div>
//         <div>
//           <div className="">
//             <LazyLoadImage
//               className="h-[50vh] sm:h-[80vh] lg:h-[85vh] w-full"
//               src={ImgBack}
//               alt="Background"
//             />
//           </div>
//           <div className="mt-12">
//             <div className="container">
//               <div>
//                 <div>
//                   <LazyLoadImage
//                     src={Img}
//                     alt={Alt}
//                     className="duration-500 rounded-md shadow-md hover:shadow-2xl"
//                   />
//                 </div>
//                 <div>
//                   <div className="w-full md:w-3/4">
//                     <h1 className="my-8 font-bold">{Title}</h1>
//                     <p>
//                       {Paragraph}
//                       {Paragraph}
//                       {Paragraph}
//                       {Paragraph}
//                       {Paragraph}
//                       {Paragraph}
//                       {Paragraph}
//                       {Paragraph}
//                     </p>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="flex items-center mt-8">
//                     <div>
//                       <LazyLoadImage
//                         className="w-12 rounded-full md:w-24"
//                         src={JournalistPic}
//                         alt={Alt}
//                       />
//                     </div>
//                     <div className="ml-4">
//                       <p>{Journalist}</p>
//                       <p>{Date}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-12">
//                   <div className="w-3/4 px-8 pt-8 pb-12 mx-auto text-white duration-500 rounded-sm shadow-md bg-main-color hover:shadow-2xl">
//                     <div className="text-center">
//                       <h1 className="my-8 font-bold">Leave A Comment</h1>
//                     </div>
//                     <div>
//                       <form className="flex flex-col text-black shadow-md lg:w-7/12">
//                         <textarea
//                           className="w-11/12 h-40 p-2 border outline-none sm:w-full"
//                           placeholder="Comment"
//                           name="comment"
//                           id="comment"
//                         ></textarea>
//                         <div className="flex flex-col mt-8 lg:flex-row">
//                           <input
//                             className="w-11/12 p-2 mb-2 mr-2 border outline-none lg:mb-0"
//                             type="text"
//                             placeholder="Name"
//                           />
//                           <input
//                             type="email"
//                             placeholder="Email"
//                             className="w-11/12 p-2 border outline-none"
//                           />
//                         </div>
//                         <div>
//                           <button className="w-11/12 py-2 mt-8 text-black bg-white ">
//                             Submit
//                           </button>
//                         </div>
//                       </form>
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

// export default BlogDetails;

// ------------------ the image wont load(so i used the second code) ------------------

import ImgBack from "./../../../../src/assets/BlogBackThree.jpg";
import BlogDetailData from "./data/data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { blogId } = useParams();

  const blog = BlogDetailData.find((blog) => blog.id == blogId);

  const { Title, Paragraph, Img, Alt, JournalistPic, Journalist, Date } = blog;

  return (
    <>
      <div>
        <div>
          <div>
            <LazyLoadImage
              className="h-[50vh] sm:h-[80vh] lg:h-[85vh] w-full"
              src={ImgBack}
              alt="Background"
            />
          </div>
          <div className="mt-12">
            <div className="container">
              <div>
                <div>
                  <LazyLoadImage
                    src={Img}
                    alt={Alt}
                    className="duration-500 rounded-md shadow-md hover:shadow-2xl"
                  />
                </div>
                <div>
                  <div className="w-full md:w-3/4">
                    <h1 className="my-8 font-bold">{Title}</h1>
                    <p>
                      {Paragraph}
                      {Paragraph}
                      {Paragraph}
                      {Paragraph}
                      {Paragraph}
                      {Paragraph}
                      {Paragraph}
                      {Paragraph}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mt-8">
                    <div>
                      <LazyLoadImage
                        className="w-12 rounded-full md:w-24"
                        src={JournalistPic}
                        alt={Alt}
                      />
                    </div>
                    <div className="ml-4">
                      <p>{Journalist}</p>
                      <p>{Date}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="w-3/4 px-8 pt-8 pb-12 mx-auto text-white duration-500 rounded-sm shadow-md bg-main-color hover:shadow-2xl">
                    <div className="text-center">
                      <h1 className="my-8 font-bold">Leave A Comment</h1>
                    </div>
                    <div>
                      <form className="flex flex-col text-black shadow-md lg:w-7/12">
                        <textarea
                          className="w-11/12 h-40 p-2 border outline-none sm:w-full"
                          placeholder="Comment"
                          name="comment"
                          id="comment"
                        ></textarea>
                        <div className="flex flex-col mt-8 lg:flex-row">
                          <input
                            className="w-11/12 p-2 mb-2 mr-2 border outline-none lg:mb-0"
                            type="text"
                            placeholder="Name"
                          />
                          <input
                            type="email"
                            placeholder="Email"
                            className="w-11/12 p-2 border outline-none"
                          />
                        </div>
                        <div>
                          <button className="w-11/12 py-2 mt-8 text-black bg-white ">
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
    </>
  );
};

export default BlogDetails;
