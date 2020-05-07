import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth);
  const icon = season === "Winter" ? "snowflake" : "sun";
  return (
    <div>
      <i className={`${icon} icon`}></i>
      <h1>
        {season === "Winter" ? "It is really cold" : "Lets go to the beach"}
      </h1>
      <i className={`${icon} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
