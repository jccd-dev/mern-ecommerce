const Color = (props) => {
  const style = {
    backgroundColor: props.color,
  };
  return (
    <div
      className="w-5 h-5 rounded-full mx-1 cursor-pointer"
      style={style}
    ></div>
  );
};

export default Color;
