import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.png";
const appointments = [
  {
    name: "Ossim Keter",
    time: "1 Hour",
    date: "16 Aug",
    status: "Pending",
    image: user1,
  },
  {
    name: "Venter Loren",
    time: "Now",
    date: "21 Sep",
    status: "Done",
    image: user2,
  },
  {
    name: "Fran Loain",
    time: "2 Day After",
    date: "06 Mar",
    status: "Pending",
    image: user1,
  },
  {
    name: "Loften Horen",
    time: "Day End",
    date: "12 Feb",
    status: "Pending",
    image: user2,
  },
  {
    name: "Loie Fenter",
    time: "2 Day After",
    date: "06 Mar",
    status: "Pending",
    image: user1,
  },
];

const Appointments = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Total Appointment</h2>
      {appointments.map((appointment, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div>
              <img
                src={appointment.image}
                alt={appointment.name}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
              />
            </div>
            <div className="ml-2">
              <p className="font-semibold">{appointment.name}</p>
              <p className="text-sm text-gray-600">{appointment.time}</p>
            </div>
          </div>
          <span className="text-sm">{appointment.date}</span>
          <span
            className={`text-sm font-semibold ${
              appointment.status === "Done"
                ? "text-green-500"
                : "text-yellow-500"
            }`}
          >
            {appointment.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Appointments;
