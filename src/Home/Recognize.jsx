import Recognizem from "./Recognize.png";
import RecognizeMobile from "./recog-mobile.png";

const Recognize = () => {
  return (
    <section>
      <section className="bg-primary pb-14 md:pb-32">
        <div className="flex flex-col-reverse  lg:flex-row   lg:ml-20 ">
          <div className="flex justify-center lg:flex-[0_0_50%] ">
            <img
              src={Recognizem}
              alt="recog-img"
              className="hidden md:block rounded"
            />
            <img src={RecognizeMobile} alt="recog-img" className="md:hidden" />
          </div>

          <div className="hidden md:flex md:flex-col lg:flex-[0_0_50%] justify-center self-center  max-w-lg">
            <h1 className="text-4xl  lg:leading-[55px] font-bold text-white ">
              Up-and-coming creators are our first love. Our forever love
            </h1>

            <div className="flex flex-col max-w-xl items- [&>*]:my-3">
              <div className="flex">
                <svg
                  width="64"
                  height="65"
                  viewBox="0 0 64 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.666016"
                    width="64"
                    height="64"
                    rx="32"
                    fill="white"
                    fill-opacity="0.12"
                  />
                  <circle
                    cx="31.5"
                    cy="32.9434"
                    r="26.5"
                    fill="white"
                    fill-opacity="0.12"
                  />
                  <circle cx="32.5" cy="32.9434" r="18.5" fill="white" />
                  <path
                    d="M24 32.4434L29.6569 38.1003L40.97 26.7865"
                    stroke="#7E3FEA"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h1 className="text-white text-xl my-auto">
                  Be recognized. Get seen. Become famous
                </h1>
              </div>
              <div className="flex">
                <svg
                  width="64"
                  height="65"
                  viewBox="0 0 64 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.666016"
                    width="64"
                    height="64"
                    rx="32"
                    fill="white"
                    fill-opacity="0.12"
                  />
                  <circle
                    cx="31.5"
                    cy="32.9434"
                    r="26.5"
                    fill="white"
                    fill-opacity="0.12"
                  />
                  <circle cx="32.5" cy="32.9434" r="18.5" fill="white" />
                  <path
                    d="M24 32.4434L29.6569 38.1003L40.97 26.7865"
                    stroke="#7E3FEA"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h1 className="text-white text-xl my-auto ">
                  Make it loud. Make it crazy. We love it crazy
                </h1>
              </div>
            </div>

            <button className="w-48 mt-8 rounded-full bg-white text-primary md:inline-flex py-2 px-7 border-2 border-solid  hover:text-white hover:bg-primary">
              Join our Waitlist
            </button>
          </div>

          <div className="md:hidden flex flex-col items-center ">
            <div className="max-w-sm">
              <h1 className="text-2xl text-white text-center">
                Up-and-coming creators are our first love. Our forever love
              </h1>

              <button className="mb-8 w-full mt-8  rounded-full bg-white text-primary md:inline-flex py-2 px-7 border-2 border-solid  hover:text-white hover:bg-primary">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Recognize;
