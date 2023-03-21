import HeroImg from "./HeroImg.png";

const HeroSection = () => {
  return (
    <section className="bg-primary pb-12  md:pb-32">
      <div className="flex flex-col lg:flex-row  items-center lg:ml-20   ">
        <div className="lg:flex-[1_0_50%] justify-center ">
          <div className="text-center max-w-sm md:max-w-lg w-full [&>*]:mb-5 lg:text-start">
            <h1 className="text-4xl lg:text-5xl lg:leading-[55px] font-bold text-white ">
              The best platform in the world for creators.
            </h1>
            <h2 className="text-xl md:text-2xl font-lato text-white">
              Create short videos, connect with amazing people, live in the
              moment and stay happy forever!
            </h2>
            <button className="w-full rounded-full bg-white text-primary md:inline-flex border-2 py-2 md:bg-buttonBG md:text-white md:rounded-lg md:w-auto px-7  hover:text-white hover:bg-primary hover:border-white">
              Join <span className="hidden md:block">&nbsp; our &nbsp; </span>{" "}
              Waitlist
            </button>
          </div>

          <h1 className="hidden md:block text-white text-xl md:text-3xl text-center lg:text-start">
            <span className="text-black">35000 &nbsp; </span>creators on
            waitlist
          </h1>
        </div>
        <div className="justify-center">
          <img src={HeroImg} alt="home-img" />

          <h1 className="md:hidden text-white text-2xl text-center md:text-left">
            <span className="text-black">35000 </span>creators on waitlist
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
