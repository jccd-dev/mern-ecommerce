import PropTypes from "prop-types";

const Links = (props) => {
  return (
    <a
      href={props.Link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-1/2 mb-2"
    >
      <li className="">{props.LinkName}</li>
    </a>
  );
};

Links.propTypes = {
  LinkName: PropTypes.string,
  Link: PropTypes.string,
};

export default Links;
