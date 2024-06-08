const NewsUpdate = () => {
  const newsUpdates = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: "June 8, 2024",
    },
    {
      id: 2,
      title: "Sed ut perspiciatis unde omnis iste natus",
      description:
        "Error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
      timestamp: "June 7, 2024",
    },
    {
      id: 3,
      title: "Nemo enim ipsam voluptatem quia voluptas",
      description:
        "Sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      timestamp: "June 6, 2024",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">News Updates</h2>
      <ul>
        {newsUpdates.map((update) => (
          <li key={update.id} className="mb-4">
            <h3 className="text-lg font-bold mb-1">{update.title}</h3>
            <p className="text-gray-600 mb-1">{update.description}</p>
            <p className="text-sm text-gray-500">{update.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsUpdate;
