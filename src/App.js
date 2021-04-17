import React, { useState } from "react";
import "./styles.css";
import { foodCuisine } from "./foodCuisine.js";

const cuisines = ["Carribean", "Vietnamese", "German", "Japanese", "Indian"];

export default function App() {
  const [content, setContent] = useState(foodCuisine.Carribean);

  const cuisineDisplay = cuisines.map((item) => (
    <button key={item} onClick={() => cuisineSelect(item)}>
      {item}
    </button>
  ));

  const getBgColor = (index) => {
    if (index % 2 === 0) {
      return "lightgreen";
    }

    return "skyblue";
  };

  const cuisineSelect = (item) => {
    setContent(foodCuisine[item]);
  };

  let data = Object.values(content);

  const cuisineDisplayHandler = data.map((item, index) => {
    return (
      <div
        id="list"
        style={{ backgroundColor: getBgColor(index) }}
        key={item.name}
      >
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Dishes For Must Try</h1>
      <h2>Explore the cuisine of your choice</h2>
      <div>{cuisineDisplay}</div>
      <span>{cuisineDisplayHandler}</span>
    </div>
  );
}
