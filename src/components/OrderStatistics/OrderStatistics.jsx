import Chart from "react-apexcharts";
import { IoGridOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

const OrderStatistics = () => {
  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1.2,
        opacityFrom: 0.3,
        opacityTo: 0.2,
        stops: [0, 90, 100],
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
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  const series = [
    {
      name: "Order",
      data: [
        3100, 4000, 2800, 5100, 4200, 10900, 9100, 6100, 4100, 3100, 4100, 3100,
      ],
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center">
        <p className="text-[#6065F2] font-semibold hover:bg-[#EEEFFE]">
          Order S<span className="bg-[#EEEFFE]">tatistics</span>
        </p>
        <IoGridOutline />
      </div>
      <div>
        <div className="text-2xl font-semibold">6,65,484 Order</div>
      </div>
      <Chart options={options} series={series} type="area" height={350} />
      <div className="flex justify-between gap-4">
        <div className="flex gap-2 items-start">
          <FiArrowUpRight
            size={28}
            className="bg-green-500 text-white rounded-lg"
          />
          <div>
            <p className="font-bold">84,315 order</p>
            <p>
              Last Two Month <br /> Order...
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <FiArrowUpRight
            size={28}
            className="bg-red-500 text-white rounded-lg"
          />
          <div>
            <p className="font-bold">61,481 order</p>
            <p>
              Last Two Month <br /> Order...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatistics;
