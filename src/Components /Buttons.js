import React from "react";
import RealData from './RealData'

const Buttons = ({ filterItem, setItem, trailItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {trailItems.map((props, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(props)}
              key={id}
            >
              {props}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(RealData)}
        >
          All
        </button>

        {/* <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("Breakfast")}
        >
          Breakfast
        </button>
        <button
          className="btn-warning text-white p-1 px-2 mx-5"
          onClick={() => filterItem("Lunch")}
        >
          Lunch
        </button>
        <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("Dinner")}
        >
          Dinner
        </button> */}
      </div>
    </>
  );
};

export default Buttons;
