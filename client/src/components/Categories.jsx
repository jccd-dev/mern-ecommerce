import { categories } from "../data/DataItems";
import CategoriesItem from "./CategoriesItem";
const Categories = () => {
  return (
    <div className="flex flex-col justify-between p-0 md:flex-row md:p-5">
      {categories.map((item) => (
        <CategoriesItem
          img={item.img}
          title={item.title}
          key={item.id}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default Categories;
