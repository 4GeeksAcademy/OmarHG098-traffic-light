import React, { useState } from "react";

const TrafficLight = () => {
  const [green, setGreen] = useState(true);
  const [yellow, setYellow] = useState(false);
  const [red, setRed] = useState(false);

  return (
    <>
      <div className="card mt-2 bg-dark mx-auto col-2 rounded}">
        <div class="card-body">
          <div>
            <button
              className={`btn btn-danger btn-lg ${
                !red && "opacity-25"
              } rounded-circle`}
              onClick={() => {
                setRed(true), setYellow(false), setGreen(false);
              }}
            ></button>
          </div>
          <div>
            <button
              className={`btn btn-warning btn-lg ${
                !yellow && "opacity-25"
              } rounded-circle`}
              onClick={() => {
                setYellow(true), setRed(false), setGreen(false);
              }}
            ></button>
          </div>
          <div>
            <button
              className={`btn btn-success btn-lg ${
                !green && "opacity-25"
              } rounded-circle`}
              onClick={() => {
                setGreen(true), setRed(false), setYellow(false);
              }}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

// <div class="card" style="width: 18rem;">

//     Card title</h5>
//     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>

export default TrafficLight;
