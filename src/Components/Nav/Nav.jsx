import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/Logo-Png.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

const Nav = () => {
  const [menu, setMenu] = useState(true);
  const [login, setLogin] = useState(false);

  const loginHandler = () => {
    setLogin(!login);
  };

  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div id="top" className="z-20 h-20 mb-2">
        <div className="hidden w-full sm:block">
          <div className="container">
            <div className="flex items-center">
              <div className="flex items-center justify-between w-full">
                <div>
                  <img className="w-24" src={LogoImg} alt="Logo" />
                </div>
                <div className="flex items-center">
                  <Link target="_blank" className="nav-link" to="/">
                    Home
                  </Link>
                  <Link
                    target="_blank"
                    className="mx-8 nav-link"
                    to="/destination"
                  >
                    Destination
                  </Link>
                  <Link target="_blank" className="nav-link" to="/about-Us">
                    About-Us
                  </Link>
                  <Link target="_blank" className="mx-8 nav-link" to="/blog">
                    Blog
                  </Link>
                  <Link target="_blank" className="nav-link" to="/contact-Us">
                    Contact-Us
                  </Link>
                  {location.pathname == "/login" ? (
                    <div className="hidden"></div>
                  ) : (
                    <div className="ml-4 lg:ml-8">
                      <Link to="/login" target="_blank">
                        <BsPersonCircle
                          onClick={loginHandler}
                          className="text-2xl cursor-pointer text-[#233b8ca1] duration-500 hover:text-main-color"
                        />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex items-center justify-between py-1">
          <div className="cursor-pointer sm:hidden">
            <div>
              {menu ? (
                <AiOutlineMenu className="text-2xl" onClick={menuHandler} />
              ) : (
                <AiOutlineClose className="text-2xl" onClick={menuHandler} />
              )}
            </div>
          </div>
          <div className="sm:hidden">
            <img
              className={
                menu ? "opacity-100 w-14 duration-500 z-10" : "opacity-0 w-14"
              }
              src={LogoImg}
              alt="Logo"
            />
          </div>
        </div>

        <div
          className={
            menu
              ? "relative z-50 -right-[-150%] duration-500"
              : "relative z-50 right-0 duration-500"
          }
        >
          <div className="w-full text-white bg-main-color sm:hidden">
            <div className="container">
              <div>
                <div>
                  <div>
                    <img className="w-14" src={LogoImg} alt="Logo" />
                  </div>
                  {location.pathname == "/login" ? (
                    <div className="hidden"></div>
                  ) : (
                    <div>
                      <Link to="/login" target="_blank">
                        <p
                          onClick={loginHandler}
                          className="text-2xl text-white duration-500 cursor-pointer hover:text-main-color"
                        >
                          Login
                        </p>
                      </Link>
                    </div>
                  )}
                  <div className="flex flex-col">
                    <Link
                      onClick={menuHandler}
                      className="mt-6 nav-link w-fit"
                      to="/"
                    >
                      Home
                    </Link>
                    <Link
                      onClick={menuHandler}
                      className="my-6 nav-link w-fit"
                      to="/destination"
                    >
                      Destination
                    </Link>
                    <Link
                      onClick={menuHandler}
                      className="nav-link w-fit"
                      to="/about-Us"
                    >
                      About-Us
                    </Link>
                    <Link
                      onClick={menuHandler}
                      className="my-6 nav-link w-fit"
                      to="/blog"
                    >
                      Blog
                    </Link>
                    <Link
                      onClick={menuHandler}
                      className="mb-8 nav-link w-fit"
                      to="/contact-Us"
                    >
                      Contact-Us
                    </Link>
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

export default Nav;
