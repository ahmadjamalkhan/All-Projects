import React from "react";
import Slider from "./Slider";
import images from "./Images";
import "./slider1.css";


function Home() {
  return (
    <section className="home">
      <div className="half-circle"></div>
      <div className="data container mt-14 mx-auto px-28 py-10">
        <div className="left-side">
          <div className="left-content">
            <div className="left-inside-content">
              <span>REAL ESTATE</span>

              <h1>
                Find a perfect <br /> home you love..!
              </h1>
              <p>
                Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
                <br /> Integer a dolor eu sapien sodales vulputate ac in purus.
              </p>
            </div>
            <div className="slider">
              <Slider>
                {images.map((image, index) => {
                  return (
                    <div className="imagesize">
                    <img key={index} src={image.imgURL} alt={image.imgAlt} />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="form shadow-lg">
            <span> Contact Us Now</span>
            <input type="text" placeholder=" Full Name" />
            <input type="text" placeholder=" Email Address" />
            <textarea type="text" placeholder="messge" rows={5}></textarea>
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
