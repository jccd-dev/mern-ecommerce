import PropTypes from "prop-types";

const Icons = (props) => {
  return (
    <span
      className={`icons w-10 h-10 rounded-full text-white flex items-center justify-center mr-5 ${props.bg}`}
    >
      {props.children}
    </span>
  );
};

Icons.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string.isRequired,
};
export default Icons;
