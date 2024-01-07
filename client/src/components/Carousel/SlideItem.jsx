import PropTypes from "prop-types";

const SlideItem = ({ img, title, desc, bg }) => {
  return (
    <div className={`flex h-full items-center ${bg} `}>
      <div className="image flex-1 h-full flex items-center justify-center">
        <img src={img} alt={`slider${img}`} className="h-4/5" />
      </div>
      <div className="content flex-1 h-full flex items-start p-12 flex-col justify-center">
        <span className="title font-bold text-6xl">{title}</span>
        <span className="desc my-8 text-xl font-normal">{desc}</span>
        <button className="p-3 text-xl bg-transparent border-2 border-black/80 cursor-pointer">
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
