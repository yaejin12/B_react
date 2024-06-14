import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart({ datePoints }) {
  console.log("datePoints", datePoints);
  /**
   * dataPoints배열에서 12개 요소의 value를 합산하여 연도 지출총액을 계산
   * 그리고 각 Chart바에 해당월지출총액/ 연도지출총액 비율울 전달
   */
  //1년치 총액
  const totalValue = datePoints
    .map((dp) => dp.value)
    .reduce((accum, curr) => accum + curr, 0);
  console.log("totalValue", totalValue);

  return (
    <div className="chart">
      {datePoints.map((dp) => (
        <ChartBar
          key={dp.label}
          label={dp.label}
          currentMonthValue={dp.value}
          totalValue={totalValue}
        />
      ))}
    </div>
  );
}

export default Chart;
