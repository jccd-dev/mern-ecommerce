const Color = ({ colors, setColor, currColor }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {colors?.map((item) => (
        <div
          className={`cursor-pointer rounded-3xl bg-slate-200 px-4 py-2 ${currColor === item ? "border-2 border-primary" : ""}`}
          key={item}
          onClick={() => setColor(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Color;
