import { popularProducts } from "../data/DataItems";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="py-2 px-2 md:p-5 flex flex-wrap justify-evenly md:justify-between w-full">
      {popularProducts.map((item) => (
        <ProductItem img={item.img} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
