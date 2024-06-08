import Chart from "react-apexcharts";

const EarningChart = () => {
  const options = {
    chart: {
      id: "basic-area",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    fill: {
      colors: ["#7579F4"],
      opacity: 0.5,
    },
    colors: ["#7579F4"],
  };

  const series = [
    {
      name: "Earnings",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Our Total Earning</h2>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default EarningChart;
