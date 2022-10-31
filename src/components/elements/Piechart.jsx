import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Private scale", 11],
    ["Initial Liquidity (will be lock)", 2],
    ["Protocol Mining Rewards", 2],
    ["Presale", 2],
    ["Team & Advisors", 7], 
  ];

  export const options = {
    title: "",
    pieHole: 0.4,
    is3D: false,
  };

const Piechart = () => {
  return (
    <>
    <div className="piechart-left">
    <Chart
      className='chart'
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
    
    </>
  )
}

export default Piechart