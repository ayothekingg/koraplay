import bestImg from "./best-img.png";

const Best = () => {
  return (
    <section className="bg-primary pb-14 md:pb-32">
      <div className="flex flex-col lg:flex-row  items-center lg:ml-20 ">
        <div className="lg:flex-[0_0_50%] justify-center">
          <div className="text-center max-w-sm md:max-w-lg w-full [&>*]:mb-5 lg:text-start">
            <h1 className="text-2xl lg:text-4xl lg:leading-[55px] font-bold text-white ">
              There’s nothing better than making money
              <span className="text-black"> while living your best life</span>
            </h1>

            <button className="py-2 px-7 w-full rounded-full bg-white text-primary md:inline-flex md:w-auto  border-2 border-solid  hover:text-white hover:bg-primary">
              Join <span className="hidden md:block">&nbsp; our &nbsp;</span>{" "}
              Waitlist
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={bestImg} alt="best-img" />
        </div>
      </div>
    </section>
  );
};

export default Best;
