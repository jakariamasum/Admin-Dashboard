import Chart from "react-apexcharts";

const Investment = () => {
  const options = {
    chart: {
      id: "investment-chart",
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
  };
  const series = [
    {
      name: "Investment",
      data: [10, 20, 15, 30, 20, 35, 40, 50, 60],
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Total Investment</h2>
      <Chart options={options} series={series} type="bar" height={350} />
      <div className="flex justify-between mt-4">
        <span>3.56% up</span>
        <span>75%</span>
      </div>
    </div>
  );
};

export default Investment;
