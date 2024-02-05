const Size = ({ sizes, setSize, currSize }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes?.map((item) => (
        <div
          className={`cursor-pointer rounded-3xl bg-slate-200 px-4 py-2 ${currSize === item ? "border-2 border-primary" : ""}`}
          key={item}
          onClick={() => setSize(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Size;
