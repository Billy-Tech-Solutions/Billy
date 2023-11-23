"use client";

import { useState } from "react";

//icons
import { RiArrowDownSFill } from "react-icons/ri";

const WaitlistRegistration = () => {
  const [userType, setUserType] = useState("");
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleShowUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };
  return (
    <main className="m-0 w-full h-[85vh] flex flex-col md:flex-row items-center justify-center md:justify-evenly">
      <h1 className="font-black text-[60px] uppercase text-purple-main">
        billy
      </h1>
      <div className="w-[90%] md:w-[40%] h-fit p-8 flex flex-col gap-8 items-center justify-center bg-pink-secondary">
        <p className="w-full text-pink-main font-bold text-xl">
          Join our waitlist!
        </p>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-0.5">
            <p className="text-xs text-black/60">Email</p>
            <input
              type="text"
              className="focus:outline-none px-4 py-2 text-xs rounded-md border border-gray-main drop-shadow-sm"
            />
          </div>
          <div className="w-full flex flex-col gap-0.5">
            <p className="text-xs text-black/60">Company</p>
            <input
              type="text"
              className="focus:outline-none px-4 py-2 text-xs rounded-md border border-gray-main drop-shadow-sm"
            />
          </div>
          <div className="w-full flex flex-col gap-0.5">
            <h2 className="text-xs text-black/60">How will you use Billy?</h2>
            <div className="w-full">
              <button
                className="w-full mb-1 px-4 py-2 flex justify-between items-center text-xs rounded-md bg-white border border-gray-main drop-shadow-sm"
                onClick={(e) => handleShowUserDropdown()}
              >
                <p className="">As a/an {userType}</p>
                <RiArrowDownSFill />
              </button>
              {showUserDropdown === true ? (
                <div className="absolute z-10 w-[285px] md:w-[420px] py-4 flex flex-col bg-white text-pink-main text-xs font-bold rounded-md">
                  <button
                    value="Advertiser"
                    onClick={(e) => {
                      setUserType(e.target.value);
                      handleShowUserDropdown();
                    }}
                    className="p-2 text-left hover:bg-purple-main/50"
                  >
                    Advertiser
                  </button>
                  <button
                    value="Ad Space Owner"
                    onClick={(e) => {
                      setUserType(e.target.value);
                      handleShowUserDropdown();
                    }}
                    className="p-2 text-left hover:bg-purple-main/50"
                  >
                    Ad Space Owner
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <button className="w-1/2 h-fit bg-button-main text-white p-1.5 rounded-md font-bold text-xl drop-shadow-xl">
          Register
        </button>
      </div>
    </main>
  );
};

export default WaitlistRegistration;
