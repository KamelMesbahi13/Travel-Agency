import { lazy } from "react";

const Contact = lazy(() => import("./Contact/Contact"));
const Header = lazy(() => import("./Header/Header"));

const ContactUs = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Contact />
      </div>
    </>
  );
};

export default ContactUs;
