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
  };
  return (
    <div className="featuredChart">
{/*<PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>;
*/}
    <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />

    </div>
  );
};

export default Featured;
