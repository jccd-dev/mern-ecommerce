import { Link } from "react-router-dom";

const TopBtn = ({ type, buttonName, link }) => {
  return (
    <Link to={link ?? "/cart"}>
      <button
        className={`topbtn cursor-pointer p-2 font-semibold ${
          type === "filled"
            ? "border-none bg-yellowed text-white"
            : "bg-transparent md:border md:border-black"
        } text-sm uppercase lg:text-lg`}
      >
        {buttonName}
      </button>
    </Link>
  );
};

export default TopBtn;
