import React from "react";
import Img from "./Img";

function Poster(props) {
  return (
    <div className="img">
      <Img img={props.img} />
    </div>
  );
}

export default Poster;
