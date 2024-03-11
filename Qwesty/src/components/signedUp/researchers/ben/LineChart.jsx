import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: 'Blue Line',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      },
      {
        name: 'Purple Line',
        data: [42, 51, 35, 42, 58, 61, 79, 72, 91]
      },
      {
        name: 'Red Line',
        data: [20, 40, 55, 60, 65, 70, 75, 80, 85]
      }
    ],
    options: {
      chart: {
        height: 200,
        type: 'line',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      colors: ['#008ffb', '#6f42c1', '#ff3d00']
    }
  });

  const handleSortChange = (event) => {
    const option = event.target.value;
    let seriesToShow = [];
    switch (option) {
      case 'One':
        seriesToShow = [chartOptions.series[0]];
        break;
      case 'Two':
        seriesToShow = [chartOptions.series[0], chartOptions.series[2]];
        break;
      default:
        seriesToShow = chartOptions.series;
    }
    setChartOptions({
      ...chartOptions,
      series: seriesToShow
    });
  };

  return (
    <div className='bg-white rounded-md w-full my-5'>
      <div className='flex justify-between p-5'>
      <select onChange={handleSortChange} defaultValue="All" className='py-2 outline-none px-10 rounded-md border-[2px] border-gray-300'>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="All">All</option>
      </select>
      <div className="md:flex gap-5 hidden">
        {chartOptions.series.map((series, index) => (
          <div key={index} className="flex items-center">
            <div className="w-4 h-4 mr-2" style={{ backgroundColor: chartOptions.options.colors[index] }}></div>
            <span>{series.name}</span>
          </div>
        ))}
      </div>
      </div>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
