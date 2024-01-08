import { popularProducts } from "../data/DataItems";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="p-5 flex flex-wrap justify-between">
      {popularProducts.map((item) => (
        <ProductItem img={item.img} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
