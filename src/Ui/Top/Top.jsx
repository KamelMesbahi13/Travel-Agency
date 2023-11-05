import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";

const Up = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      <div
        className={
          visible
            ? "fixed bottom-20 w-full z-50 transition-all duration-500 opacity-100"
            : "transition-all duration-500 opacity-0"
        }
      >
        <div className="container">
          <div className="relative float-right w-12 h-12 transition-all duration-300 rounded-sm cursor-pointer bg-main-color hover:bg-[#233b8cc0]">
            <Link smooth={true} duration={900} to="top" onClick={scrollToTop}>
              <AiOutlineArrowUp className="absolute text-4xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Up;
