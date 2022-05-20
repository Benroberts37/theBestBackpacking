import React from "react";
import RealData from './RealData'

const Buttons = ({ filterItem, setItem, filterCountry, filterTrailType, filterRouteType }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {filterCountry.map((props, id) => {
          return (
            <button
              className=""
              onClick={() => filterItem(props)}
              key={id}
            >
              {props}
            </button>
          );
        })}
        <button
          className=""
          onClick={() => setItem(RealData)}
        >
          All
        </button>
      </div>


      <div className="d-flex justify-content-center">
        {filterTrailType.map((props, id) => {
          return (
            <button
              className=""
              onClick={() => filterRouteType(props)}
              key={id}
            >
              {props}
            </button>
          );
        })}
        <button
          className=""
          onClick={() => setItem(RealData)}
        >
          All
        </button>
      </div>
      
    </>
  );
};

export default Buttons;
