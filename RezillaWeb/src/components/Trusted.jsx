import React from "react";
// import images from "../images";
import google from "../images/google.png"
import amazon from "../images/amazon.png"
import logitech from "../images/logitech.png"
import netflix from "../images/netflix.png"
import spotify from "../images/spotify.png"
import samsung from "../images/samsung.png"

const Trusted = () => {
    const companies = [
        { name: "Google", logo:google },
        { name: "Amazon", logo: amazon },
        { name: "Logitech", logo:  logitech},
        { name: "Spotify", logo: spotify },
        { name: "Samsung", logo: samsung},
        { name: "Netflix", logo: netflix},
      ];
    
      return (
        <div className="bg-white  py-12">
          <div className="max-w-7xl mx-auto text-center">
            {/* Upper section with text */}
            <p className="text-sm text-gray-500 font-medium mb-8">
              Trusted by 100+ Companies across the globe!
            </p>
            
            {/* Logos */}
            <div className=" filter grayscale grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
              {companies.map((company) => (
                <img
                  key={company.name}
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto mx-auto"
                />
              ))}
            </div>
          </div>
        </div>
      );
    };
export default Trusted;
