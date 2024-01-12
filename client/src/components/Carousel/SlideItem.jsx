import PropTypes from "prop-types";

const SlideItem = ({ img, title, desc, bg }) => {
  return (
    <div className={`flex h-full items-center ${bg} relative`}>
      <div className="image w-full md:flex-1 h-full flex items-center justify-center">
        <img src={img} alt={`slider${img}`} className="h-4/5" />
      </div>
      <div className="content absolute inset-0 md:flex-1 h-full flex items-center md:items-start p-12 flex-col justify-center md:relative bg-black/30">
        <span className="title font-semibold md:font-bold text-2xl md:text-4xl lg:text-6xl  text-white md:text-black text-center md:text-start w-full">
          {title}
        </span>
        <span className="desc my-8 text-md md:text-xl font-normal text-center text-white md:text-black">
          {desc}
        </span>
        <button className="p-2 md:p-3 text-xl bg-transparent border-2 border-white/80 md:border-black/80 cursor-pointer  text-white md:text-black">
          Show now
        </button>
      </div>
    </div>
  );
};

SlideItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};

export default SlideItem;
