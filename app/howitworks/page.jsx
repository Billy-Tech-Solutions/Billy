"use client";

import { useState } from "react";

import JoinOurWaitlist from "@/components/JoinOurWaitlist";
import Footer from "@/components/Footer";
import Image from "next/image";

//icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { MdInsertChartOutlined } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";

//images
import audience from "@/public/audience.png";
import graph from "@/public/graph.png";
import map from "@/public/map.png";
import HowItWorksHero from "@/public/HowItWorks-Hero.jpeg";

const HowItWorks = () => {
  const [showDropdown, setShowDropdown] = useState(Array(3).fill(false));
  const [inputIndex, setInputIndex] = useState(null);

  const handleShowDropdown = (index) => {
    setInputIndex(index);
    setShowDropdown((prev) => {
      const newDropdowns = [...prev];
      newDropdowns[index] = !newDropdowns[index];
      return newDropdowns;
    });
  };

  return (
    <main className="w-full flex flex-col items-center">
      <section className="herosection_background w-full h-screen bg-no-repeat">
        <div className="w-full h-full bg-black/50 flex flex-col items-center justify-center gap-12">
          <div className="w-full flex flex-col items-center gap-2">
            <h1 className="w-2/3 text-center font-bold text-2xl text-pink-main leading-none md:w-[90%] md:text-[40px] lg:w-[70%] lg:text-[60px]">
              Matching you to ad spaces based on your desired market.
            </h1>
            <h3 className="italic text-white text-sm md:text-lg">
              Aggregate your ads.
            </h3>
          </div>
          <JoinOurWaitlist />
        </div>
      </section>

      <div className="w-full bg-gradient-to-br from-black to-purple-main">
        <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-10">
          <div className="w-fit h-fit px-4 py-8 bg-white flex flex-col gap-2 rounded-md drop-shadow-lg">
            <div className="flex flex-col">
              <h1 className="font-bold">Select your audience.</h1>
              <p className="text-xs">
                Tell us more about who you want to reach.
              </p>
            </div>

            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-col gap-1">
                <p className="text-xs text-gray-main">Location/s</p>
                <div
                  className="w-[300px] flex items-center justify-between border border-gray-main rounded-md p-1 text-xs"
                  onClick={(e) => handleShowDropdown(0)}
                >
                  <input
                    type="text"
                    placeholder="Search location"
                    className="focus:outline-none"
                  />
                  <IoIosSearch />
                </div>
                {showDropdown[0] === true ? (
                  <div className="w-[300px] h-[100px] flex flex-col gap-0.5 items-start rounded-md bg-white border border-gray-main text-xs overflow-y-auto">
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      Location 1
                    </button>
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      Location 1
                    </button>
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      Location 1
                    </button>
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      Location 1
                    </button>
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      Location 1
                    </button>
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      Location 1
                    </button>
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      Location 1
                    </button>
                  </div>
                ) : null}
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-xs text-gray-main">Age Range</p>
                <div
                  className="w-[300px] flex items-center justify-between border border-gray-main rounded-md p-1 text-xs"
                  onClick={(e) => handleShowDropdown(1)}
                >
                  <p>Select age range</p>
                  <IoIosArrowDown />
                </div>
                {showDropdown[1] === true ? (
                  <div className="w-[300px] h-[100px] flex flex-col gap-0.5 items-start rounded-md bg-white border border-gray-main text-xs overflow-y-auto">
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      0-10
                    </button>
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      11-20
                    </button>
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      21-30
                    </button>
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      31-40
                    </button>
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      41-50
                    </button>
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      51-60
                    </button>
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      61 above
                    </button>
                  </div>
                ) : null}
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-xs text-gray-main">Gender/s</p>
                <div
                  className="w-[300px] flex items-center justify-between border border-gray-main rounded-md p-1 text-xs"
                  onClick={(e) => handleShowDropdown(2)}
                >
                  <p>Select gender/s</p>
                  <IoIosArrowDown />
                </div>
                {showDropdown[2] === true ? (
                  <div className="w-[300px] h-fit flex flex-col gap-0.5 items-start rounded-md bg-white border border-gray-main text-xs overflow-y-auto">
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      Female
                    </button>
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      Male
                    </button>
                    <button className="w-full px-2 py-0.5 text-left hover:bg-pink-secondary">
                      Not specified
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src={map}
              width={420}
              height={300}
              alt="map"
              className="rounded-md opacity-90 drop-shadow-lg"
            />
          </div>
        </section>

        <section className="w-full h-screen flex flex-col items-center justify-center gap-10 p-10">
          <h1 className="w-full text-[30px] lg:text-[60px] text-center font-black text-white">
            Simple and Straightforward
          </h1>
          <div className="w-full md:w-[80%] flex flex-col lg:flex-row gap-8 items-center justify-center">
            <div className="w-full h-64 lg:w-1/2 flex flex-col lg:flex-row items-center justify-center lg:gap-8 rounded-md">
              <MdGroups className="text-[100px] lg:text-[200px] text-white drop-shadow-md" />
              <div className="w-[50%] flex flex-col gap-4">
                <h1 className="w-full p-2 m-auto bg-pink-main text-white font-black text-center rounded-md drop-shadow-md">
                  Step 1
                </h1>
                <h2 className="w-full font-black text-white text-center">
                  Choose your audience and set a budget.
                </h2>
              </div>
            </div>
            <div className="w-full h-64 lg:w-1/2 flex flex-col lg:flex-row items-center justify-center lg:gap-8 rounded-md">
              <MdInsertChartOutlined className="text-[100px] lg:text-[200px] text-white drop-shadow-md" />
              <div className="w-[50%] flex flex-col gap-4">
                <h1 className="w-full p-2 m-auto bg-pink-main text-white font-black text-center rounded-md drop-shadow-md">
                  Step 2
                </h1>
                <h2 className="w-full font-black text-white text-center">
                  Track your stats.
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-screen lg:h-[75vh] flex flex-col items-center justify-center gap-4">
          <div className="w-full h-full flex flex-col items-center justify-center gap-6">
            <p className="text-white text-[45px] lg:text-[60px] font-black drop-shadow-lg">
              Interested?
            </p>
            <JoinOurWaitlist />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default HowItWorks;
