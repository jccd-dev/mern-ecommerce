import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEye,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <div className="group relative m-1 flex h-56 w-40 items-center justify-center bg-primary md:h-80 md:min-w-72 md:flex-1">
      <span className="circle absolute h-28 w-28 rounded-full bg-secondary/80 md:h-48 md:w-48"></span>
      <img
        src={props.img}
        alt={`product ${props.img}`}
        className="z-10 h-2/4 md:h-3/5 lg:h-3/4"
      />
      <section className="absolute inset-0 z-20 hidden h-full w-full cursor-pointer items-center justify-center bg-slate-500 bg-opacity-30 transition-all duration-[0.5s] ease-in-out group-hover:flex">
        <div className="m-1 flex h-8 w-8 transform items-center justify-center rounded-full bg-white transition-all duration-500 ease-in-out hover:scale-110 hover:bg-secondary/80 md:h-10 md:w-10">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-sm md:text-lg"
          />
        </div>
        <Link to={`/product/${props.id}`}>
          <div className="m-1 flex h-8 w-8 transform items-center justify-center rounded-full bg-white transition-all duration-500 ease-in-out hover:scale-110 hover:bg-secondary/80 md:h-10 md:w-10">
            <FontAwesomeIcon icon={faEye} className="text-sm md:text-lg" />
          </div>
        </Link>

        <div className="m-1 flex h-8 w-8 transform items-center justify-center rounded-full bg-white transition-all duration-500 ease-in-out hover:scale-110 hover:bg-secondary/80 md:h-10 md:w-10">
          <FontAwesomeIcon icon={faHeart} className="text-sm md:text-lg" />
        </div>
      </section>
    </div>
  );
};

ProductItem.propTypes = {
  img: PropTypes.string,
  id: PropTypes.string,
};
export default ProductItem;
