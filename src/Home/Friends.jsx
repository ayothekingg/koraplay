import friend from "./Friends.png";

const Friends = () => {
  return (
    <section className="bg-primary pb-14 md:pb-32">
      <div className="flex flex-col lg:flex-row  items-center lg:ml-20 ">
        <div className="lg:flex-[0_0_50%] justify-center relative">
          <div className="text-center max-w-sm md:max-w-lg w-full [&>*]:mb-5 lg:text-start">
            <h1 className="text-2xl lg:text-4xl lg:leading-[55px] font-bold text-white ">
              Not just for creators. Have fun with friends and family!{" "}
              <span className="text-black">Join the fun today!</span>
            </h1>

            <svg
              className="hidden md:block absolute right-2"
              width="209"
              height="69"
              viewBox="0 0 209 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.45851 4.1717C2.70272 3.36619 1.43703 3.32588 0.631519 4.08167C-0.173995 4.83746 -0.214304 6.10315 0.541487 6.90866L3.45851 4.1717ZM31.5 49.5402L29.8938 50.7319L31.5 49.5402ZM209 49.5402L187.152 42.0562L191.595 64.7188L209 49.5402ZM0.541487 6.90866C7.10976 13.9091 17.1745 20.474 28.4508 25.9781C39.7544 31.4955 52.413 36.0137 64.2836 38.8601C76.1122 41.6964 87.3381 42.9168 95.7116 41.6911C99.8964 41.0785 103.563 39.8279 106.22 37.6797C108.961 35.4646 110.5 32.392 110.5 28.5404H106.5C106.5 31.1887 105.503 33.1161 103.706 34.5689C101.825 36.0887 98.9526 37.174 95.1322 37.7333C87.4952 38.8512 76.8462 37.7591 65.2164 34.9704C53.6286 32.1918 41.2456 27.7724 30.2054 22.3835C19.138 16.9814 9.55691 10.6713 3.45851 4.1717L0.541487 6.90866ZM110.5 28.5404C110.5 21.1706 108.917 15.3404 106.025 10.9302C103.12 6.49987 98.9949 3.65666 94.2062 2.11204C84.7408 -0.941138 72.6679 1.05479 61.5741 5.57937C50.436 10.122 39.8685 17.3797 33.3505 25.3892C26.8806 33.3397 23.9523 42.7238 29.8938 50.7319L33.1062 48.3485C28.8202 42.5717 30.4032 35.3482 36.4531 27.914C42.455 20.5386 52.4159 13.6344 63.0847 9.28317C73.7977 4.91391 84.8101 3.28417 92.9783 5.9189C97.0065 7.21823 100.335 9.54736 102.68 13.1235C105.038 16.7197 106.5 21.73 106.5 28.5404H110.5ZM29.8938 50.7319C35.5019 58.2906 45.0592 62.8504 56.734 65.3966C68.4454 67.9508 82.5879 68.545 97.7632 67.9194C128.12 66.6678 163.023 60.5119 191.718 54.9661L190.958 51.0387C162.263 56.5849 127.624 62.6849 97.5984 63.9228C82.5824 64.5419 68.8233 63.9392 57.5864 61.4885C46.313 59.0299 37.8756 54.7769 33.1062 48.3485L29.8938 50.7319Z"
                fill="white"
              />
            </svg>

            <button className=" w-full rounded-full bg-white text-primary md:inline-flex py-2  md:w-auto px-7 border-2 border-solid  hover:text-white hover:bg-primary ">
              Join <span className="hidden md:block">&nbsp; our &nbsp;</span>{" "}
              Waitlist
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={friend} alt="home-img" />
        </div>
      </div>
    </section>
  );
};

export default Friends;
