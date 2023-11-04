import React from "react";

function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://preview.colorlib.com/theme/essence/img/bg-img/bg-1.jpg.webp)",
      }}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="hero-content">
        <div>
          <h1 className="mb-5 text-5xl font-bold">New Collection</h1>

          <button className="btn btn-primary">View Collection</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
