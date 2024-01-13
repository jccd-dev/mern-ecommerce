import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Newsletter = () => {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center bg-sage-400 md:bg-secondary">
      <div className="title mb-4 text-center text-5xl font-bold md:mb-5 md:text-start md:text-6xl lg:text-7xl">
        News Letter
      </div>
      <div className="desc mb-3 text-center text-xl font-[300] md:mb-5 md:text-2xl">
        Keep abreast of the latest news and updates from the products you love.
      </div>
      <div className="flex h-10 w-4/5 justify-between border border-slate-200 bg-white md:w-1/2">
        <input
          type="email"
          name="email"
          id="email"
          className="flex-[6] border-none pl-4 outline-none md:flex-[8]"
        />
        <button className="flex-1 border-none bg-yellowed text-white">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
