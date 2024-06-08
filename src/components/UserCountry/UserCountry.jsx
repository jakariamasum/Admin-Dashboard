import Chart from "react-apexcharts";

const UserCountry = () => {
  const options = {
    chart: {
      id: "countries-chart",
      background: "#f9fafb",
      foreColor: "#333",
    },
    labels: ["USA", "India", "UK"],
    colors: ["#1E90FF", "#FF6347", "#32CD32"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(1)}%`,
    },
    tooltip: {
      theme: "dark",
    },
  };

  const series = [55, 30, 15];
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Our Total Users</h2>
      <Chart options={options} series={series} type="donut" height={350} />
      <div className="flex justify-around mt-4 text-gray-600">
        <span>USA: 55%</span>
        <span>India: 30%</span>
        <span>UK: 15%</span>
      </div>
    </div>
  );
};

export default UserCountry;
