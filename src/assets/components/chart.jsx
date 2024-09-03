import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '50%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yaxis: {
      title: {
        text: 'Revenue (in USD)',
      },
    },
    title: {
      text: 'Monthly Revenue',
      align: 'center',
      margin: 20,
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'var(---font-color)',
      },
    },
  };

  const series = [
    {
      name: 'Revenue',
      data: [35000, 42000, 48000, 52000, 61000, 68000, 72000, 83000, 90000, 95000, 102000, 110000],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ColumnChart;
