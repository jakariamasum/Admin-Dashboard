/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { FiArrowUpRight } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa";

const Card = ({ bgColor, mainColor, bgText, price, percentage }) => {
  console.log(bgColor, mainColor, bgText, price, percentage);

  return (
    <div className="bg-white relative p-4 rounded-[20px] flex flex-col gap-3 shadow">
      <h3
        className={`text-lg font-semibold w-fit text-[${mainColor}] hover:bg-[${bgColor}]`}
      >
        Our tot<span className={`bg-[${bgColor}]`}>al {bgText}</span>
      </h3>
      <p className="text-2xl font-bold">{price}</p>
      <p className=" flex items-center gap-1">
        <FiArrowUpRight
          fontSize={20}
          fontWeight={800}
          className={`text-[${mainColor}] bg-[${bgColor}] p-1 rounded-full`}
        />{" "}
        <span className={`text-[${mainColor}] font-bold`}>{percentage}</span>{" "}
        More Than Last Month
      </p>
      <FaDollarSign
        fill="white"
        size={40}
        className={`bg-[${mainColor}] rounded-full p-3 right-4 bottom-2 absolute`}
      />
    </div>
  );
};

export default Card;
