import React from "react";

export default function Mainloder() {
  return (
    <div className="w-[100vw] h-[100vh] items-center justify-center flex">
      <div className="loader JS_on ">
        <span className="binary" />
        <span className="binary" />
        <span className="getting-there">LOADING...</span>
      </div>
    </div>
  );
}
