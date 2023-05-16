// import logo from './logo.svg';
import './App.css';

import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js/auto';


var xArray = [], yArray = [];
var time = 0
var size = 100
for(var i=0;i<size;i++){
  xArray.push(time);
  yArray.push(Math.random());
  time += 1;
}


const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: xArray,
        datasets: [
          {
            label: 'Data',
            data: yArray,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;