import Chart from "react-apexcharts";

const UserByDevice = () => {
  const options = {
    chart: {
      id: "devices-chart",
    },
    labels: ["Desktop", "Mobile", "Tablet"],
  };
  const series = [96.564, 92.624, 46.564];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Our Total Users</h2>
      <Chart options={options} series={series} type="donut" height={350} />
      <div className="flex justify-around mt-4">
        <span>Desktop: 96.564%</span>
        <span>Mobile: 92.624%</span>
        <span>Tablet: 46.564%</span>
      </div>
    </div>
  );
};

export default UserByDevice;
