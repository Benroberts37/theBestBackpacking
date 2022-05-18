import React, { useState } from "react";
import Card from "./Card";
import Buttons from "./Buttons";
import RealData from './RealData'
import TrailCard from "./TrailCard";

const App = () => {
  const [item, setItem] = useState(RealData);

  const trailItems = [...new Set(RealData.map((props) => props.country))];

  const filterItem = (item) => {
    const newItem = RealData.filter((newProps) => {
      return newProps.country === item;
    });
    
    setItem(newItem);
  };


  return (
    <>
      <div className="">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">The Best Backpacking</h1>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            trailItems={trailItems}
          />
          <Card item={item} />
        </div>
      </div>
    </>
  );
};

export default App;
