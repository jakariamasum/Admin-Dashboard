import nike from "../../assets/nike.png";
import headphone from "../../assets/headphone.jpg";
import watch from "../../assets/watch.jpg";
import purse from "../../assets/black_purse.jpg";
import pot from "../../assets/tree_pot.jpg";
import shirt from "../../assets/shirt.jpg";
import phone from "../../assets/phone.jpg";
import jewellery from "../../assets/jewellary.jpg";
const products = [
  { name: "Nike Shoes", items: 451, price: "$49.00", image: nike },
  { name: "Headphone", items: 1657, price: "$28.00", image: headphone },
  { name: "Tree Pot", items: 32, price: "$30.00", image: pot },
  { name: "Black Purse", items: 663, price: "$22.00", image: purse },
  { name: "Ck Watch", items: 4785, price: "$48.00", image: watch },
  { name: "New T-shirt", items: 9, price: "$69.00", image: shirt },
  { name: "Jewellery", items: 7878, price: "$78.00", image: jewellery },
  { name: "Smart Phone", items: 987, price: "$36.00", image: phone },
];

const ProductList = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Selling Product</h2>
      <div className="overflow-x-auto">
        <table className=" bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product</th>
              <th className="py-2 px-4 border-b">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <div className="font-semibold">{product.name}</div>
                    <div className="text-sm text-gray-500">
                      {product.items} item
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
