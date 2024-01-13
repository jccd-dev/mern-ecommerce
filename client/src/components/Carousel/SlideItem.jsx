import PropTypes from "prop-types";

const SlideItem = ({ img, title, desc, bg }) => {
  return (
    <div className={`flex h-full items-center ${bg} relative`}>
      <div className="image flex h-full w-full items-center justify-center md:flex-1">
        <img src={img} alt={`slider${img}`} className="h-4/5" />
      </div>
      <div className="content absolute inset-0 flex h-full flex-col items-center justify-center bg-black/30 p-12 md:relative md:flex-1 md:items-start md:bg-transparent">
        <span className="title w-full text-center text-2xl font-semibold text-white  md:text-start md:text-4xl md:font-bold md:text-black lg:text-6xl">
          {title}
        </span>
        <span className="desc text-md my-8 text-center font-normal text-white md:text-start md:text-xl md:text-black">
          {desc}
        </span>
        <button className="cursor-pointer border-2 border-white/80 bg-transparent p-2 text-xl text-white md:border-black/80  md:p-3 md:text-black">
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
