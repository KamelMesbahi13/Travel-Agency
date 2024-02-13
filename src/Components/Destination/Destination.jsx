import { lazy } from "react";
const Header = lazy(() => import("./Header/Header"));
const Offers = lazy(() => import("./Offers/Offers"));

const Destination = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="container">
        <Offers />
      </div>
    </>
  );
};

export default Destination;
