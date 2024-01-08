import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Newsletter = () => {
  return (
    <div className="h-[60vh] bg-secondary/80 flex items-center justify-center flex-col">
      <div className="title text-7xl mb-5 font-bold">News Letter</div>
      <div className="desc text-2xl font-[300] mb-5">
        Keep abreast of the latest news and updates from the products you love.
      </div>
      <div className="w-1/2 h-10 bg-white flex justify-between border border-slate-200">
        <input
          type="email"
          name="email"
          id="email"
          className="border-none flex-[8] pl-4 outline-none"
        />
        <button className="flex-1 border-none bg-yellowed text-white">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
