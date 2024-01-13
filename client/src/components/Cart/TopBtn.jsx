const TopBtn = ({ type, buttonName }) => {
  return (
    <button
      className={`topbtn cursor-pointer p-2 font-semibold ${
        type === "filled"
          ? "border-none bg-yellowed text-white"
          : "bg-transparent md:border md:border-black"
      } text-sm uppercase lg:text-lg`}
    >
      {buttonName}
    </button>
  );
};

export default TopBtn;
