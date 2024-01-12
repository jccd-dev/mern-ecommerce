import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const ProductItem = (props) => {
  return (
    <div className="group md:flex-1 m-1 w-40 md:min-w-72 h-56 md:h-80 flex items-center justify-center bg-primary relative">
      <span className="circle w-28 h-28 md:w-48 md:h-48 rounded-full bg-secondary/80 absolute"></span>
      <img
        src={props.img}
        alt={`product ${props.img}`}
        className="z-10 h-2/4 md:h-3/5 lg:h-3/4"
      />
      <section className="hidden group-hover:flex w-full h-full absolute inset-0 bg-slate-500 bg-opacity-30 z-20 items-center justify-center transition-all duration-[0.5s] ease-in-out cursor-pointer">
        <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-white flex items-center justify-center m-1 transition-all duration-500 ease-in-out hover:bg-secondary/80 transform hover:scale-110">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="md:text-lg text-sm"
          />
        </div>
        <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-white flex items-center justify-center m-1 transition-all duration-500 ease-in-out hover:bg-secondary/80 transform hover:scale-110">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="md:text-lg text-sm"
          />
        </div>
        <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-white flex items-center justify-center m-1 transition-all duration-500 ease-in-out hover:bg-secondary/80 transform hover:scale-110">
          <FontAwesomeIcon icon={faHeart} className="md:text-lg text-sm" />
        </div>
      </section>
    </div>
  );
};

ProductItem.propTypes = {
  img: PropTypes.string,
};
export default ProductItem;
