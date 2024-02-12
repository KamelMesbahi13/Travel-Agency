import { lazy } from "react";
const Header = lazy(() => import("./Header/Header"));
const Testimonials = lazy(() => import("../Home/Testimonials/Testimonials"));
const Team = lazy(() => import("./Team/Team"));
import AboutTeam from "./AboutTeam/AboutTeam";

const AboutUs = () => {
  return (
    <>
      <div>
        <div className="container">
          <Header />
          <AboutTeam />
        </div>
        <Team />
        <div className="container">
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
