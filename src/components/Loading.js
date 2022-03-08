import React from "react";
import { ThreeDots } from "@agney/react-loading";

const Loading = () => {
  return (
    <div className="loading flex justify-center align-center">
      <div>
        <h1 className="loading-text text-center">Azooz </h1>
      </div>
      <div>
        <ThreeDots className="oval" width="50" />
      </div>
    </div>
  );
};

export default Loading;
