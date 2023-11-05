import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Img from "./../../../src/assets/SignUp.jpg";
import Facebook from "./../../../src/assets/facebook.png";
import Google from "./../../../src/assets/google.png";

const SingUp = () => {
  return (
    <>
      <div className="duration-500 opacity-100">
        <div>
          <div className="w-full relative mt-12 z-50 h-[100vh]">
            <div className="container">
              <div className="flex flex-col items-center justify-between px-8 py-8 rounded-lg shadow-2xl md:flex-row-reverse">
                <div>
                  <LazyLoadImage
                    className="mb-4 md:mb-0"
                    src={Img}
                    alt="Login Background"
                  />
                </div>
                <div className="w-[30%]">
                  <form>
                    <div className="mb-2 text-center">
                      <h1 className="mb-1 font-bold text-main-color">
                        Create An Account
                      </h1>
                      <p className="text-xs md:text-sm">
                        Welcome To Our Agency
                      </p>
                    </div>
                    <div>
                      <input
                        className="w-full py-2 pl-1 mt-2 duration-500 border shadow-lg outline-none hover:border-main-color hover:shadow-xl"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="my-2">
                      <br />
                      <input
                        className="w-full py-2 pl-1 mt-2 duration-500 border shadow-lg outline-none hover:border-main-color hover:shadow-xl"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="my-2">
                      <br />
                      <input
                        className="w-full py-2 pl-1 mt-2 duration-500 border shadow-lg outline-none hover:border-main-color hover:shadow-xl"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mt-2 mb-8">
                      <br />
                      <input
                        className="w-full py-2 pl-1 mt-2 duration-500 border shadow-lg outline-none hover:border-main-color hover:shadow-xl"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </form>
                  <div className="mt-4 text-center">
                    <Link className="px-4 py-2 mt-2 font-semibold text-white bg-[#233b8cda] duration-500 hover:bg-main-color rounded-sm md:px-6 md:py-3">
                      Sign Up
                    </Link>
                    <div className="mt-4 md:mt-6">
                      <p className="text-xs italic">Or</p>
                    </div>

                    <div className="flex justify-center w-full mt-2">
                      <img
                        src={Facebook}
                        className="w-6 mr-2 cursor-pointer"
                        alt="Facebook"
                      />
                      <img
                        src={Google}
                        className="w-6 cursor-pointer"
                        alt="Google"
                      />
                    </div>
                    <div className="mt-2">
                      <p className="text-xs italic">
                        You Have An Account ??{" "}
                        <Link to="/login" className="font-bold">
                          Login
                        </Link>{" "}
                      </p>
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

export default SingUp;
