const Color = (props) => {
  const style = {
    backgroundColor: props.color,
  };

  const selectColor = () => {
    props.sColor(props.color);
  };

  return (
    <div
      className="mx-1 h-5 w-5 cursor-pointer rounded-full"
      style={style}
      onClick={selectColor}
    ></div>
  );
};

export default Color;
