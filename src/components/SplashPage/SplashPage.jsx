import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Poster from "./Poster";
import imgs from "./images";

function SplashPage() {
  return (
    <div>
      {imgs.map((index) => (
        <Poster img={index.imgURL} />
      ))}
    </div>
  );
}

export default SplashPage;
