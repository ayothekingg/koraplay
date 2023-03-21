import join from "./join.png";
import joinMobile from "./join-mobile2.png";

const JoinSection = () => {
  return (
    <section className="bg-primary pb-14 md:pb-32">
      <div className="flex flex-col-reverse  lg:flex-row   lg:ml-20 ">
        <div className="flex justify-center lg:flex-[0_0_50%] ">
          <img src={join} alt="join-img" className="hidden md:block rounded" />
          <img src={joinMobile} alt="join-img" className="md:hidden" />
        </div>

        <div className="hidden md:block lg:flex-[0_0_50%] justify-center  mt-16">
          <h1 className="text-4xl  lg:leading-[55px] font-bold text-white ">
            Why Join Koraplay ?
          </h1>

          <div className="flex flex-col  max-w-xl [&>*]:my-3">
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

              <h1 className="text-white text-xl ">
                Wider content reach, greater visibility and higher engagement
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
                Cash rewards for original and engaging contents
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

              <h1 className="text-white text-xl my-auto">
                Instant payout, Instant withdrawal of earnings.
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

              <h1 className="text-white text-xl my-auto">
                Easy withdrawals options for African-based creators
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

              <h1 className="text-white text-xl my-auto">
                E-commerce opportunities for businesses and Brands
              </h1>
            </div>
          </div>

          <button className="mt-8 w-auto rounded-full bg-white text-primary md:inline-flex py-2 px-7 border-2 border-solid  hover:text-white hover:bg-primary ">
            Join our Waitlist
          </button>
        </div>

        <div className="md:hidden flex flex-col items-center ">
          <div className="max-w-sm">
            <h1 className="text-2xl text-white text-center">
              Cash rewards for <span className="text-black">original </span> and{" "}
              <span className="text-black"> engaging </span> content on Koraplay
            </h1>
            <div className="">
              <button className="mb-8 mt-8 w-full rounded-full bg-white text-primary md:inline-flex py-2  md:w-auto px-7 border-2 border-solid  hover:text-white hover:bg-primary">
                Join <span className="hidden md:block">&nbsp; our &nbsp;</span>{" "}
                Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
