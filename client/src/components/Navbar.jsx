import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
// import { Badge } from "@mui/material";
// import { ShoppingCartOutlined } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="h-[60px]">
      <div className="py-2 px-5 flex items-center justify-between">
        <section id="left" className="flex-1 flex items-center">
          <span className="text-sm cursor-pointer">EN</span>
          <div className="border border-slate-500/15 flex items-center ml-6 py-1 px-2 rounded-md">
            <input type="text" className="border-none outline-none" />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-400 text-sm"
            />
          </div>
        </section>
        <section id="center" className="flex-1 text-center">
          <h1 className="font-bold">JC-SHOP</h1>
        </section>
        <section id="right" className="flex-1 flex items-center justify-end">
          <div className="text-sm cursor-pointer ml-6">Register</div>
          <div className="text-sm cursor-pointer ml-6">Login</div>
          <div className="text-sm cursor-pointer ml-6">
            {/* <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge> */}
            <button
              type="button"
              className="relative inline-flex items-center p-2 text-sm font-medium text-center text-black/80 focus:outline-none focus:ring-blue-300 border-none"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <div className="absolute inline-flex items-center justify-center w-5 h-5 p-2 text-xs font-bold text-white bg-sky-600 rounded-full -top-2 -end-2 ">
                4
              </div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
