import "./featured.scss";

//Doughnut Chart
import React from 'react';

import { Chart } from "react-google-charts";



const Featured = () => {
  const data = [
    ["Emissions", "Monthly Emissions"],
    ["Logistics", 25],
    ["Warehouse", 2],
    ["Building", 2],
    ["Y", 2],
    ["Z", 7],
  ];

  const options = {
    title: "Monthly Emissions",
    backgroundColor: '#e1d4c9',
    height: 500
  };
  return (
    <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
  );
};

export default Featured;
