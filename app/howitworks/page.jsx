import JoinOurWaitlist from "@/components/JoinOurWaitlist";
import Footer from "@/components/Footer";
import Image from "next/image";

//icons
import { IoIosArrowDown } from "react-icons/io";

//images
import audience from "@/public/audience.png";
import graph from "@/public/graph.png";
import map from "@/public/map.png";


const HowItWorks = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-10 bg bg-black/90 p-10">
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start justify-center gap-2 text-center md:text-left">
          <h1 className="text-lg md:text-2xl font-black text-purple-main">
            Easy access to a consolidated marketplace of physical ad spaces.
          </h1>
          <h3 className="text-white italic">Aggregate your ads!</h3>
        </div>
        <div>
          <JoinOurWaitlist />
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-10 bg bg-purple-main p-10">
        <div className="w-fit px-4 py-8 bg-white flex flex-col gap-2 rounded-md drop-shadow-lg">
          <div className="flex flex-col">
            <h1 className="font-bold">Select your audience.</h1>
            <p className="text-xs">Tell us more about who you want to reach.</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-main">Location/s</p>
              <div className="w-full p-1 bg-white flex items-center justify-between text-xs text-gray-main border border-gray-main rounded-md">
                <p>Select location</p>
                <IoIosArrowDown />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-main">Age Range</p>
              <div className="w-full p-1 bg-white flex items-center justify-between text-xs text-gray-main border border-gray-main rounded-md">
                <p>Select age</p>
                <IoIosArrowDown />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-main">Gender</p>
              <div className="w-full p-1 bg-white flex items-center justify-between text-xs text-gray-main border border-gray-main rounded-md">
                <p>Select gender</p>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={map} width={420} height={300} alt="map" className="rounded-md opacity-90 drop-shadow-lg"/>
        </div>
      </section>
      <section className="w-full flex items-center justify-center gap-10 bg-pink-secondary p-10">
        <div className="w-full md:w-[80%] flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
            <h1 className="w-[100px] p-2 m-auto bg-yellow-main text-white font-black text-center rounded-md drop-shadow-md">
              Step 1
            </h1>
            <h2 className="w-2/3 m-auto text-sm font-black text-purple-main text-center">
              Choose your audience and set a budget.
            </h2>
            <Image src={audience} width={300} height={100} alt="audience" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
            <h1 className="w-[100px] p-2 m-auto bg-yellow-main text-white font-black text-center rounded-md drop-shadow-md">
              Step 2
            </h1>
            <h2 className="w-2/3 m-auto text-sm font-black text-purple-main text-center">
              Track your stats.
            </h2>
            <Image src={graph} width={300} height={100} alt="stats" />
          </div>
        </div>
      </section>
      <section className="w-full h-60 flex items-center justify-center gap-8 bg-white p-10">
        <p className="text-pink-main text-2xl font-black">Interested?</p>
        <JoinOurWaitlist />
      </section>
      <Footer/>
    </main>
  );
};

export default HowItWorks;
