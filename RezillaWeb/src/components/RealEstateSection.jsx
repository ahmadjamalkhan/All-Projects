import React from "react";
import images from "../images/img.png";

const FeatureBox = () => {
  return (
    <div className="flex items-start last-btn shadow-lg">
      <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          Donec porttitor euismod
        </h3>
        <p className="text-gray-600">
          Nullam a lacinia ipsum, nec dignissim purus. Nulla
        </p>
      </div>
    </div>
  );
};

const RealEstateSection = () => {
  return (
    <section className="home last">
      <div className="half-circle"></div>
      <div className="data container mt-14 mx-auto px-28 py-10">
        <div className="left-side">
          <div className="left-content">
            <div className="left-inside-content">
              <span>WHO ARE WE</span>

              <h1
                style={{
                  textWrap: "nowrap",
                }}
              >
                Assisting individuals in <br /> locating the appropriate <br />
                real estate.
              </h1>
              <p>
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                <br />
                dignissim purus. Nulla convallis ipsum molestie nibh malesuada,
                <br />
                ac malesuada leo volutpat.
              </p>
              <div className="mt-8 space-y-6">
                <FeatureBox />
                <FeatureBox />
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
<div className="img">
  <img src={images} alt="" />
</div>

        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;
