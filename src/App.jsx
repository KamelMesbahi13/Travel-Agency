import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./Components/Home/Home"));
const Nav = lazy(() => import("./Components/Nav/Nav"));
const Footer = lazy(() => import("./Ui/Footer/Footer"));
const Destination = lazy(() => import("./Components/Destination/Destination"));
const DestinationDetails = lazy(() =>
  import("./Components/Destination/DestinationDetails/DestinationDetails")
);
const Blog = lazy(() => import("./Components/Blog/Blog"));
const BlogDetails = lazy(() =>
  import("./Components/Blog/BlogDetails/BlogDetails")
);
const AboutUs = lazy(() => import("./Components/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./Components/ContactUs/ContactUs"));
const Top = lazy(() => import("./Ui/Top/Top"));
const ScrollToTop = lazy(() => import("./GeneralFunctions/ScrollTop"));
const ErrorBoundary = lazy(() => import("./ErrorHandler/ErrorHandler"));
const Loader = lazy(() => import("./Ui/Loader/Loader"));
const Error = lazy(() => import("./Components/Error/Error"));
const SingUp = lazy(() => import("./Components/SingUp/SingUp"));
const Login = lazy(() => import("./Components/Login/Login"));

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="mt-20 text-center">
            <Loader />
          </div>
        }
      >
        <ErrorBoundary>
          <ScrollToTop>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destination" element={<Destination />} />
              <Route
                path="/destination/:destinationId"
                element={<DestinationDetails />}
              />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:blogId" element={<BlogDetails />} />
              <Route path="/about-Us" element={<AboutUs />} />
              <Route path="/contact-Us" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SingUp />} />
              <Route path="/*" element={<Error />} />
            </Routes>
            <Top />
            <Footer />
          </ScrollToTop>
        </ErrorBoundary>
      </Suspense>
    </>
  );
};

export default App;
