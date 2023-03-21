const Love = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <section className="bg-primary pb-14 md:pb-32 ">
      <div className=" lg:ml-20">
        <svg
          width="72"
          height="73"
          viewBox="0 0 72 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1045_22774)">
            <path
              d="M22.5 18.6938C19.7451 18.6935 17.1004 19.7758 15.1362 21.7075C13.172 23.6391 12.0456 26.2653 12 29.0198C11.73 31.6148 11.769 35.4428 13.524 39.8618C15.318 44.3798 18.816 49.3058 25.2 54.0938C25.5151 54.3302 25.8738 54.5022 26.2554 54.6C26.6371 54.6978 27.0342 54.7194 27.4242 54.6637C28.2119 54.5512 28.9226 54.1304 29.4 53.4939C29.8773 52.8573 30.0823 52.0572 29.9698 51.2696C29.8573 50.4819 29.4365 49.7712 28.8 49.2938C24.108 45.7749 21.42 42.3548 19.881 39.3638C21.3238 39.7344 22.8291 39.7937 24.2966 39.5377C25.7642 39.2818 27.1605 38.7165 28.3927 37.8794C29.625 37.0423 30.6651 35.9526 31.4438 34.6827C32.2225 33.4127 32.7221 31.9916 32.9094 30.5137C33.0966 29.0358 32.9673 27.535 32.5299 26.1109C32.0925 24.6869 31.3571 23.3722 30.3725 22.2543C29.388 21.1363 28.1768 20.2406 26.8194 19.6268C25.4621 19.0129 23.9897 18.6949 22.5 18.6938ZM49.5 18.6938C46.7451 18.6935 44.1004 19.7758 42.1362 21.7075C40.172 23.6391 39.0456 26.2653 39 29.0198C38.73 31.6148 38.769 35.4428 40.524 39.8618C42.315 44.3798 45.816 49.3058 52.2 54.0938C52.5151 54.3302 52.8738 54.5022 53.2554 54.6C53.6371 54.6978 54.0342 54.7194 54.4242 54.6637C55.2119 54.5512 55.9226 54.1304 56.4 53.4939C56.8774 52.8573 57.0823 52.0572 56.9698 51.2696C56.8573 50.4819 56.4365 49.7712 55.8 49.2938C51.108 45.7749 48.42 42.3548 46.881 39.3638C48.3238 39.7344 49.8291 39.7937 51.2966 39.5377C52.7642 39.2818 54.1605 38.7165 55.3927 37.8794C56.625 37.0423 57.6651 35.9526 58.4438 34.6827C59.2225 33.4127 59.7221 31.9916 59.9094 30.5137C60.0966 29.0358 59.9673 27.535 59.5299 26.1109C59.0925 24.6869 58.3571 23.3722 57.3725 22.2543C56.388 21.1363 55.1768 20.2406 53.8194 19.6268C52.4621 19.0129 50.9897 18.6949 49.5 18.6938Z"
              fill="#15072E"
            />
          </g>
          <defs>
            <clipPath id="clip0_1045_22774">
              <rect
                width="72"
                height="72"
                fill="white"
                transform="matrix(-1 0 0 1 72 0.693848)"
              />
            </clipPath>
          </defs>
        </svg>

        <div
          className="block md:flex justify-between
        "
        >
          <div>
            <h1 className="text-white w-full text-2xl text-center  md:text-4xl font-bold">
              People{" "}
              <span
                className="text-buttonBG
            "
              >
                Love
              </span>{" "}
              Koraplay
            </h1>
          </div>

          <div className="hidden md:flex">
            <svg
              onClick={slideLeft}
              className="inline mx-4 cursor-pointer"
              width="50"
              height="61"
              viewBox="0 0 60 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.9375 36.9439L26.5625 30.6939L35.9375 24.4439C36.0606 24.3618 36.1664 24.2563 36.2487 24.1333C36.331 24.0104 36.3883 23.8724 36.4174 23.7273C36.4464 23.5823 36.4465 23.4329 36.4178 23.2877C36.3891 23.1426 36.3321 23.0045 36.25 22.8814C36.1679 22.7583 36.0624 22.6525 35.9395 22.5702C35.8165 22.4878 35.6786 22.4305 35.5335 22.4015C35.3884 22.3725 35.239 22.3723 35.0939 22.4011C34.9487 22.4298 34.8106 22.4868 34.6875 22.5689L24.06 29.6539C23.8888 29.768 23.7484 29.9227 23.6514 30.1041C23.5543 30.2855 23.5035 30.4881 23.5035 30.6939C23.5035 30.8996 23.5543 31.1022 23.6514 31.2836C23.7484 31.4651 23.8888 31.6197 24.06 31.7339L34.6875 38.8189C34.8106 38.901 34.9487 38.958 35.0939 38.9867C35.239 39.0154 35.3884 39.0152 35.5335 38.9862C35.6786 38.9572 35.8165 38.8999 35.9395 38.8176C36.0624 38.7352 36.1679 38.6295 36.25 38.5064C36.3321 38.3833 36.3891 38.2452 36.4178 38.1C36.4465 37.9549 36.4464 37.8055 36.4174 37.6604C36.3883 37.5153 36.331 37.3774 36.2487 37.2544C36.1664 37.1315 36.0606 37.026 35.9375 36.9439Z"
                fill="white"
              />
              <rect
                x="1.5"
                y="2.19385"
                width="57"
                height="57"
                rx="28.5"
                stroke="white"
                strokeWidth="3"
              />
            </svg>

            <svg
              onClick={slideRight}
              className="inline mx-4 cursor-pointer"
              width="50"
              height="61"
              viewBox="0 0 60 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.0625 36.9439L33.4375 30.6939L24.0625 24.4439C23.9394 24.3618 23.8336 24.2563 23.7513 24.1333C23.669 24.0104 23.6117 23.8724 23.5826 23.7273C23.5536 23.5823 23.5535 23.4329 23.5822 23.2877C23.6109 23.1426 23.6679 23.0045 23.75 22.8814C23.8321 22.7583 23.9376 22.6525 24.0605 22.5702C24.1835 22.4878 24.3214 22.4305 24.4665 22.4015C24.6116 22.3725 24.761 22.3723 24.9061 22.4011C25.0513 22.4298 25.1894 22.4868 25.3125 22.5689L35.94 29.6539C36.1112 29.768 36.2516 29.9227 36.3486 30.1041C36.4457 30.2855 36.4965 30.4881 36.4965 30.6939C36.4965 30.8996 36.4457 31.1022 36.3486 31.2836C36.2516 31.4651 36.1112 31.6197 35.94 31.7339L25.3125 38.8189C25.1894 38.901 25.0513 38.958 24.9061 38.9867C24.761 39.0154 24.6116 39.0152 24.4665 38.9862C24.3214 38.9572 24.1835 38.8999 24.0605 38.8176C23.9376 38.7352 23.8321 38.6295 23.75 38.5064C23.6679 38.3833 23.6109 38.2452 23.5822 38.1C23.5535 37.9549 23.5536 37.8055 23.5826 37.6604C23.6117 37.5153 23.669 37.3774 23.7513 37.2544C23.8336 37.1315 23.9394 37.026 24.0625 36.9439Z"
                fill="white"
              />
              <rect
                x="-1.5"
                y="1.5"
                width="57"
                height="57"
                rx="28.5"
                transform="matrix(-1 0 0 1 57 0.693848)"
                stroke="white"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>

        <div
          id="slider"
          className="  overflow-x-hidden scroll-smooth   flex flex-col  items-center md:flex-row [&>div]:my-4  [&>div]:mx-4 "
        >
          <div className="flex flex-col w-96  bg-white  h-64 rounded-lg md:flex-[0_0_33%] ">
            <h1 className="h-52  px-3 py-3 font-abeze">
              As an Africa-based creator, I appreciate Koraplay's easy
              withdrawal options. It's great to finally have a platform that
              values and supports my content. I am looking forward to the mobile
              app launch. Thank you Koraplay Waitlist Joined!!
            </h1>

            <h1 className="flex self-end px-3 py-3 font-semibold">
              {" "}
              -Jude Kingsley
            </h1>
          </div>
          <div className="flex flex-col   bg-white w-96 h-64 rounded-lg md:flex-[0_0_33%]">
            {" "}
            <h1 className="h-52 px-2 py-2 font-abeze">
              Koraplay without doubts is a must-try for anyone looking to grow
              their social media presence, especially for an up-and-coming
              creator like myself. I'm thrilled to see how quickly my content
              will go viral on Koraplay. . The wider content reach and high
              engagement rates will be amazing to behold. Excited to have joined
              the waitlist" Looking forward to this masterpiece.
            </h1>
            <h1 className="flex self-end px-3 py-3 font-semibold">
              -Sandra Regha
            </h1>
          </div>
          <div className="flex flex-col w-96 bg-white  h-64 rounded-lg md:flex-[0_0_33%]">
            <h1 className="h-52 px-2 py-2 font-abeze ">
              I love the cash rewards for original and engaging content on
              Koraplay. This will be a game-changer for millions of creators out
              there. I can't wait to see how much I can earn on this platform
              with my great content! Wooow" I have joined the waitlist. Can’t
              wait!!
            </h1>

            <h1 className="flex self-end px-3 py-3 font-semibold">
              -Ridwan Olakunji
            </h1>
          </div>

          <div className="flex flex-col w-96 bg-white  h-64 rounded-lg md:flex-[0_0_33%]">
            <h1 className="h-52 px-2 py-2 font-abeze ">
              Koraplay’s e-commerce opportunities for businesses and brands are
              a fantastic way to grow my business, reach new customers, and
              generate more sales for my business than ever before. If you are
              an online business owner you should join the waitlist now.
              Strongly recommended. 
            </h1>

            <h1 className="flex self-end px-3 py-3 font-semibold">
              -Amaka Esther
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="w-58 mt-8 rounded-full bg-white text-primary md:inline-flex py-2 px-7 border-2 border-solid  hover:text-white hover:bg-primary">
          Join our Waitlist now
        </button>
      </div>
    </section>
  );
};

export default Love;
