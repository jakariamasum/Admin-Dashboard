/* eslint-disable react/prop-types */
import Chart from "react-apexcharts";
import { IoIosArrowUp } from "react-icons/io";

const ChartCard = ({
  mainColor,
  startColor,
  endcolor,
  title,
  seriesData,
  categories,
  percentage,
}) => {
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
      colors: [mainColor],
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.5,
        opacityFrom: 1,
        opacityTo: 0.1,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: startColor,
            opacity: 0.9,
          },
          {
            offset: 100,
            color: endcolor,
            opacity: 0.6,
          },
        ],
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  const series = [
    {
      name: "Data",
      data: seriesData,
    },
  ];

  return (
    <div className="p-4 bg-white rounded-[20px] shadow">
      <div>
        <h2
          className={`text-xl font-bold mb-1 uppercase`}
          style={{ color: mainColor }}
        >
          {title}
        </h2>
        <p className="flex items-center gap-1">
          {percentage}%
          <IoIosArrowUp />{" "}
        </p>
      </div>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default ChartCard;
