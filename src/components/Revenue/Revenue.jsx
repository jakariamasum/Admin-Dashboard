import Chart from "react-apexcharts";

const Revenue = () => {
  const options = {
    chart: {
      id: "revenue-chart",
      toolbar: {
        show: false,
      },
      background: "#f9fafb",
      foreColor: "#333",
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
    colors: ["#5D62F2"],
    stroke: {
      curve: "smooth",
      width: 3,
    },

    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "#e7e7e7",
    },
    tooltip: {
      theme: "dark",
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Total Revenue</h2>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default Revenue;
