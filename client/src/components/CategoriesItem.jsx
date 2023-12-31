import PropTypes from "prop-types";

const CategoriesItem = (props) => {
  return (
    <div className="flex-1 m-1 h-[70vh] relative">
      <img
        src={props.img}
        alt={`category ${props.img}`}
        className="w-full h-full object-cover"
      />
      <div className="info absolute inset-0 w-full h-full flex flex-col items-center justify-center">
        <span className="title text-white mb-5">{props.title}</span>
        <button className="border-none p-2 bg-white text-sage cursor-pointer font-[600]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

CategoriesItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CategoriesItem;
