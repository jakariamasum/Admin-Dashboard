const Welcome = () => {
  const user = {
    name: "John",
    profilePicture:
      "https://i.ibb.co/nfTLk9q/photo-1560250097-0b93528c311a-q-80-w-1887-auto-format-fit-crop-ixlib-rb-4-0.jpg",
    pendingTasks: 5,
    newNotifications: 3,
    totalEmails: 120,
    tasksCompleted: 45,
    projects: 7,
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col  items-center space-y-6 md:space-y-0 md:space-x-8">
      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shadow-md">
        <img
          className="w-full h-full object-cover"
          src={user.profilePicture}
          alt={`${user.name}'s profile`}
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome Back, {user.name}!
        </h2>
        <p className="text-gray-600 mt-2">
          You have <span className="font-semibold">{user.pendingTasks}</span>{" "}
          pending tasks.
        </p>
        <p className="text-gray-600">
          You have{" "}
          <span className="font-semibold">{user.newNotifications}</span> new
          notifications.
        </p>
        <div className="flex space-x-6 mt-4 justify-center md:justify-start">
          <div className="bg-blue-100 text-blue-600 p-4 rounded-lg text-center shadow-sm">
            <h3 className="text-xl font-bold">{user.totalEmails}</h3>
            <p className="text-sm">Total Emails</p>
          </div>
          <div className="bg-green-100 text-green-600 p-4 rounded-lg text-center shadow-sm">
            <h3 className="text-xl font-bold">{user.tasksCompleted}</h3>
            <p className="text-sm">Tasks Completed</p>
          </div>
          <div className="bg-yellow-100 text-yellow-600 p-4 rounded-lg text-center shadow-sm">
            <h3 className="text-xl font-bold">{user.projects}</h3>
            <p className="text-sm">Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
