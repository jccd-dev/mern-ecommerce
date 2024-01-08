import { categories } from "../data/DataItems";
import CategoriesItem from "./CategoriesItem";
const Categories = () => {
  return (
    <div className="flex p-5 justify-between">
      {categories.map((item) => (
        <CategoriesItem img={item.img} title={item.title} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
