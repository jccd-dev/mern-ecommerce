import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoriesItem = (props) => {
  return (
    <div className="relative m-1 h-[70vh] flex-1">
      <Link to={`/products/${props.category}`}>
        <img
          src={props.img}
          alt={`category ${props.img}`}
          className="h-[20vh] w-full object-cover md:h-full"
        />
        <div className="info absolute inset-0 flex h-full w-full flex-col items-center justify-center">
          <h1 className="title mb-5 text-2xl font-normal text-white md:font-semibold">
            {props.title}
          </h1>
          <button className="text-sage cursor-pointer border-none bg-white p-2 font-[600]">
            Shop Now
          </button>
        </div>
      </Link>
    </div>
  );
};

CategoriesItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
};

export default CategoriesItem;
