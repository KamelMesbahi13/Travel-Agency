import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import GetInTouch from "../GetInTouch/GetInTouch";

const Contact = () => {
  return (
    <>
      <div className="p-8 duration-500 bg-white rounded-md shadow-md hover:shadow-2xl">
        <div>
          <div className="text-center">
            <h1 className="mb-12 font-bold">Contact Us</h1>
          </div>
          <div className="flex flex-col justify-between md:flex-row-reverse">
            <div className="mx-auto">
              <iframe
                className="w-full mx-auto"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96835.37269733252!2d-74.25313803212114!3d40.67164662581361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c251ebedceabe7%3A0x3afdeac0adbb853a!2sBayonne%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sdz!4v1698163855811!5m2!1sen!2sdz"
                width="400"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-12 md:mt-0">
              <div className="md:w-2/4 textCenter">
                <i className="text-2xl text-main-color">
                  <FaLocationDot />
                </i>
                <h6 className="my-2 font-bold">LOCATION</h6>
                <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
              </div>

              <div className="md:w-2/4 textCenter">
                <i className="text-2xl text-main-color">
                  <AiOutlineMail />
                </i>
                <h6 className="my-2 font-bold">EMAIL</h6>
                <p>www.tourHub.com</p>
                <p>www.support.com</p>
              </div>

              <div className="md:w-2/4 textCenter">
                <i className="text-2xl text-main-color">
                  <AiFillPhone />
                </i>
                <h6 className="my-2 font-bold">CALL US</h6>
                <p> 0555 55 55 55</p>
                <p> 066 66 66 66</p>
              </div>

              <div className="md:w-2/4 textCenter">
                <h6 className="font-bold text-main-color">Contact Us</h6>
                <h6 className="my-2"></h6>
                <p>Contact us for a quote. Help or to join the team.</p>
              </div>
            </div>
          </div>
        </div>
        <GetInTouch />
      </div>
    </>
  );
};

export default Contact;
