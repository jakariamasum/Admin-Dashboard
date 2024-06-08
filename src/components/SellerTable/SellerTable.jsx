const SellerTable = () => {
  const sellers = [
    {
      name: "Ossim Keter",
      year: 2022,
      product: "Clothes",
      total: "$1,58,652",
      status: "Success",
    },
    {
      name: "Venter Loren",
      year: 2021,
      product: "Shoes",
      total: "$95,025",
      status: "Success",
    },
    {
      name: "Fran Loain",
      year: 2022,
      product: "Electronics",
      total: "$90,155",
      status: "Success",
    },
    {
      name: "Loften Horen",
      year: 2021,
      product: "Watch",
      total: "$80,658",
      status: "Success",
    },
    {
      name: "Loie Fenter",
      year: 2022,
      product: "Jewellery",
      total: "$50,652",
      status: "Success",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Our Total Sold</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border text-center mx-auto border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Best Seller</th>
              <th className="py-2 px-4 border-b">Product</th>
              <th className="py-2 px-4 border-b">Total</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Edit</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b flex items-center">
                  <img
                    src={`https://randomuser.me/api/portraits/thumb/${
                      index % 2 === 0 ? "men" : "women"
                    }/${index}.jpg`}
                    alt={seller.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <div className="font-semibold">{seller.name}</div>
                    <div className="text-sm text-gray-500">{seller.year}</div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b">{seller.product}</td>
                <td className="py-2 px-4 border-b">{seller.total}</td>
                <td className="py-2 px-4 border-b">{seller.status}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-[#F3F3F3] text-black  py-1 px-3 rounded">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerTable;
