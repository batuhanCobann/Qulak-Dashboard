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
        borderRadius: 0,
        columnWidth: '20%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      labels: {
        style: {
          colors: 'var(---font-color)', 
          fontSize: '14px',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Revenue (%)',
      },
      labels: {
        formatter: function (value) {
          return value + "%";
        },
        style: {
          colors: 'var(---font-color)', 
          fontSize: '14px',
        },
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
    colors: ['#437EF7'], 
  };


  const series = [
    {
      name: 'Revenue',
      data: [30, 20, 74, 80, 10, 110, 85, 30, 75, 70, 20, 100]
        .map(value => (value / 100) * 20), // Bu örnekte 110000 en yüksek değer olarak alındı
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ColumnChart;
