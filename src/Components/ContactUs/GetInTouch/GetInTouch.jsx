const GetInTouch = () => {
  return (
    <>
      <div className="mt-12 md:mt-28">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="w-full md:w-3/4">
            <h1 className="mb-4 font-bold text-second-color">
              Get In Touche With Us
            </h1>
            <p className="my-4 italic font-bold">
              We can ensure reliability, low cost fares and most important, with
              safety and comfort in mind.
            </p>
            <p className="w-full md:w-3/4">
              Etiam sit amet convallis erat – class aptent taciti sociosqu ad
              litora torquent per conubia! Maecenas gravida lacus. Lorem etiam
              sit amet convallis erat.
            </p>
          </div>
          <div className="w-full mt-12 md:w-auto">
            <form>
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className="mt-2 border-b-2 outline-none border-main-color bg-[#eee] p-1 w-full"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="my-4">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  className="mt-2 border-b-2 outline-none border-main-color bg-[#eee] p-1 w-full"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  className="mt-2 border-b-2 outline-none border-main-color bg-[#eee] p-1 w-full"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
