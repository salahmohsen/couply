import Button from "../button/button";
import UserImages from "../userImages/userImages";

const MainSection = () => {
  return (
    <section className="grid grid-cols-2 items-center justify-items-center gap-10 lg:grid-cols-3">
      <div className="col-span-2 flex h-full flex-col items-center justify-center gap-10  py-10  sm:items-start lg:w-full lg:border-r ">
        <h1 className="text-center text-3xl font-bold leading-snug  sm:text-left sm:text-5xl md:max-w-[694px]  lg:pt-8">
          Shopping with coupons, applied automatically!
        </h1>
        <div className="flex flex-col items-center justify-center gap-5 sm:items-start">
          <h2 className="text-xl">Used by over 500,000</h2>
          <UserImages />
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-10 lg:col-span-1  lg:py-12">
        <div className="flex flex-col items-start gap-4 md:flex-row lg:flex-col">
          <InstructionsItem
            number={"1"}
            text={"Download the Extension for Chrome or Firefox."}
          />
          <InstructionsItem
            number={"2"}
            text={"Visit your favorite online retailers."}
          />
          <InstructionsItem
            number={"3"}
            text={"Save! Apply coupons from the toolbar."}
          />
        </div>
        <Button $variation="main" className="mb-10">
          Install Extension
        </Button>
      </div>
    </section>
  );
};

export default MainSection;

const InstructionsItem = ({ number, text }) => {
  return (
    <div className="flex items-center gap-4 md:flex-col md:items-start md:justify-between md:gap-2 lg:flex-row lg:gap-4">
      <div className=" flex items-center justify-center md:ml-1 lg:ml-0 lg:mt-1">
        <div className="absolute h-5 w-5 rounded-full bg-black p-1"></div>
        <span className="z-10 text-xs text-white">{number}</span>
      </div>
      <p>{text}</p>
    </div>
  );
};
