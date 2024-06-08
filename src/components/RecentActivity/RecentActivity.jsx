import { IoGridOutline } from "react-icons/io5";
import { GoDot, GoDotFill } from "react-icons/go";
import img1 from "../../assets/nike.png";
import img2 from "../../assets/nike.png";
const activities = [
  {
    date: "20-04-2022",
    status: "Today",
    description: "Updated Product",
    details: "I like to be real. I don't like things to be staged or fussy.",
    new: false,
  },
  {
    date: "20-04-2022",
    status: "Today",
    description: "James just like your product",
    details: "Design and style should work toward making look good.",
    new: true,
    images: [img1, img2],
  },
  {
    date: "20-04-2022",
    status: "Today",
    description: "Jihan Doe just like your product",
    details: "If you have it, you can make anything look good.",
    new: false,
  },
];

const RecentActivity = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center">
        <p className="text-[#6065F2] font-semibold hover:bg-[#EEEFFE] mb-3">
          Recent A<span className="bg-[#EEEFFE]">ctivity</span>
        </p>
        <IoGridOutline />
      </div>
      <h2 className="text-xl font-bold mb-4">New & Update</h2>
      <ul className="list-none">
        {activities.map((activity, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-500 flex justify-between">
                  <div className={`flex gap-4  text-[#6065F2] items-center`}>
                    <GoDot
                      size={28}
                      className={`${
                        index % 2 === 1 ? `text-[#6065F2]` : "text-[#F0BF44]"
                      }`}
                    />
                    {activity.date}
                    <span className="ml-1 text-gray-500">
                      {activity.status}
                    </span>
                    <div>
                      {activity.new && (
                        <span className="bg-[#6065F2] text-white text-xs py-1 px-2 rounded">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                  <GoDotFill
                    size={20}
                    className={`${
                      index % 2 === 1 ? `text-[#6065F2]` : "text-[#F0BF44]"
                    }`}
                  />
                </div>
                <div className="font-semibold">{activity.description}</div>
                <div className="text-sm text-gray-500">{activity.details}</div>
                {activity.images && (
                  <div className="flex mt-2">
                    {activity.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt="Product"
                        className="w-24 h-24 rounded mr-2"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
