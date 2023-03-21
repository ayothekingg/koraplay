import creators from "./creators.jpg";
import creatorMobile from "./creators-mobile.png";

const CreatorSection = () => {
  return (
    <section className="bg-primary pb-14 md:pb-32">
      <div className="flex flex-col lg:flex-row  items-center lg:ml-20 ">
        <div className="lg:flex-[0_0_50%] justify-center ">
          <div className="text-center max-w-sm md:max-w-lg w-full [&>*]:mb-5 lg:text-start">
            <h1 className="text-4xl lg:text-5xl lg:leading-[55px] font-bold text-white ">
              Inspiring a <span className="text-black">new generation</span> of
              creators
            </h1>

            <button className=" w-full rounded-full bg-white text-primary md:inline-flex py-2  md:w-auto px-7 border-2 border-solid  hover:text-white hover:bg-primary">
              Join <span className="hidden md:block">&nbsp; our &nbsp;</span>{" "}
              Waitlist
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={creators} alt="home-img" className="hidden md:block" />
          <img src={creatorMobile} alt="creator-img" className="md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
