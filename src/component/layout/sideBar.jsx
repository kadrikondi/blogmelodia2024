import React from "react";
import Image from "react-bootstrap/Image";
import Messo from "../../asset/messi.webp";

export default function sideBar() {
  return (
    <div style={{ backgroundColor: "grey", color: "white", height: "500px" }}>
      <Image
        src={Messo}
        roundedCircle
        style={{ width: "60px", height: "60px", padding: "10px" }}
      />{" "}
      <span>Lionel Messi</span>
    </div>
  );
}
