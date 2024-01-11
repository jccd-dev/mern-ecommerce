const TopBtn = ({ type, buttonName }) => {
  return (
    <button
      className={`topbtn p-2 font-semibold cursor-pointer ${
        type === "filled"
          ? "border-none text-white bg-primary"
          : "bg-transparent border-black border"
      } uppercase`}
    >
      {buttonName}
    </button>
  );
};

export default TopBtn;
