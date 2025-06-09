import FaceClock from "../features/schedule/FaceClock";

const LazySchedulePage = () => {
  return (
    <main className="flex flex-col justify-center items-center bg-[#e6edff] py-12 min-h-screen">
    
      <div className="flex flex-col items-center w-full">
        <div className="flex justify-center items-center mb-8 rounded-xl w-72 sm:w-[24rem] md:w-[30rem] h-72 sm:h-[24rem] md:h-[30rem]">
          <FaceClock />
        </div>
        {/* Place your form or other content here */}
      </div>
    </main>
  );
};

export default LazySchedulePage;
