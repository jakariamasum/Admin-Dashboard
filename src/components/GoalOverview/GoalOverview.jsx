import Chart from "react-apexcharts";
import { IoGridOutline } from "react-icons/io5";

const GoalOverview = () => {
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
            show: false,
          },
          value: {
            fontSize: "26px",
            color: "#6065F2",
          },
          total: {
            show: true,
            label: "Total",
          },
        },
      },
    },
    fill: {
      colors: "#6065F2",
    },
    labels: ["Progress"],
  };

  const series = [75];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center">
        <p className="text-[#6065F2] font-semibold hover:bg-[#EEEFFE]">
          Our Goal O<span className="bg-[#EEEFFE]">verview</span>
        </p>
        <IoGridOutline />
      </div>
      <h2 className="text-xl font-bold mb-4 ">Goal Overview</h2>
      <Chart options={options} series={series} type="radialBar" height={350} />
      <div className="flex justify-around mt-4">
        <div>
          <div className="font-bold text-lg">$8,54,159</div>
          <div className="text-sm text-gray-500">Completed</div>
        </div>
        <div>
          <div className="font-bold text-lg">$9,85,000</div>
          <div className="text-sm text-gray-500">Our Goal</div>
        </div>
        <div>
          <div className="font-bold text-lg">$66,264</div>
          <div className="text-sm text-gray-500">In Progress</div>
        </div>
      </div>
    </div>
  );
};

export default GoalOverview;
