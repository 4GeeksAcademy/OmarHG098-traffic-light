import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("");

  return (
    <>
      <div className="card mt-2 bg-dark mx-auto col-2 rounded}">
        <div class="card-body">
          <div className="my-2">
            <button
              className={`btn btn-danger btn-lg p-5 ${
                color != "red" && "opacity-25"
              } rounded-circle`}
              onClick={() => {
                setColor("red");
              }}
            ></button>
          </div>
          <div className="my-2">
            <button
              className={`btn btn-warning btn-lg p-5 my-3 ${
                color != "yellow" && "opacity-25"
              } rounded-circle`}
              onClick={() => {
                setColor("yellow");
              }}
            ></button>
          </div>
          <div className="my-2">
            <button
              className={`btn btn-success btn-lg p-5 ${
                color != "green" && "opacity-25"
              } rounded-circle`}
              onClick={() => {
                setColor("green");
              }}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrafficLight;
