import React from 'react';

function Popular() {
  const customerImages = [
    "https://via.placeholder.com/40", // Replace with actual image URLs
    "https://via.placeholder.com/40",
    "https://via.placeholder.com/40",
    "https://via.placeholder.com/40",
    "https://via.placeholder.com/40",
  ];

  return (
    <section className="flex justify-center items-center py-5  ">
      <div className="flex justify-between secto  gap-48">
        
        {/* Left Side: Happy Customers */}
        <div className="flex items-center space-x-4 sec2-left-seide bg-gray-50 shadow-lg px-10 py-7">
          {/* Overlapping Customer Images */}
          <div className="flex -space-x-2">
            {customerImages.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`Customer ${index + 1}`}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full border-2 border-white">
              <span className="text-sm font-semibold">+</span>
            </div>
          </div>
          {/* Text */}
          <span className="text-lg font-semibold">72k+ <br /> Happy Customers</span>
        </div>

        {/* Right Side: New Listings */}
        <div className="flex items-center sec2-right-seide space-x-4 bg-gray-50 shadow-lg px-10 py-7">
          <img
            src="https://via.placeholder.com/40" // Replace with actual image
            alt="New Listings"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-semibold">200+ New <br /> Listings Everyday!</span>
        </div>
      </div>
    </section>
  );
}

export default Popular;
