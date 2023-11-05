import { lazy } from "react";
const Services = lazy(() => import("./OurServices/Services"));
const Header = lazy(() => import("./Header/Header"));
const Tranding = lazy(() => import("./Tranding/Tranding"));
const WhyUs = lazy(() => import("./WhyUs/WhyUs"));
const Testimonials = lazy(() => import("./Testimonials/Testimonials"));
const Advice = lazy(() => import("./Advice/Advice"));

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Services />
        <Tranding />
        <WhyUs />
        <Testimonials />
        <Advice />
      </div>
    </div>
  );
};

export default Home;
