import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    alert("logout");
    dispatch(logout());
    // If you're using localStorage or sessionStorage, clear that as well
    localStorage.removeItem("user");
    navigate("/login");
    // Redirect to login or home page as needed
  };
  return (
    <div className="h-[60px]">
      <div className="flex h-full items-center justify-between px-4 py-2 md:px-5">
        <section id="left" className="flex flex-1 items-center">
          <span className="hidden cursor-pointer text-sm md:block">EN</span>
          <div className="ml-0 flex items-center rounded-md border border-slate-500/15 px-2 py-1 md:ml-6">
            <input
              type="text"
              className="w-12 border-none outline-none md:w-auto"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-sm text-gray-400"
            />
          </div>
        </section>
        <section id="center" className="flex-1 text-center">
          <Link to={"/"}>
            <h1 className="text-sm font-bold md:text-2xl">JC-SHOP</h1>
          </Link>
        </section>
        <section
          id="right"
          className="flex flex-[2] items-center justify-center md:flex-1 md:justify-end"
        >
          {currentUser ? (
            <div
              className="ml-2 cursor-pointer text-xs md:ml-6 md:text-sm"
              onClick={handleLogout}
            >
              Logout
            </div>
          ) : (
            <>
              <Link to={"/login"}>
                <div className="ml-2 cursor-pointer text-xs md:ml-6 md:text-sm">
                  Login
                </div>
              </Link>
              <Link to={"/register"}>
                <div className="ml-2 cursor-pointer text-xs md:ml-6 md:text-sm">
                  Register
                </div>
              </Link>
            </>
          )}

          <div className="ml-2 cursor-pointer text-xs md:ml-6 md:text-sm">
            {/* <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge> */}
            <Link to={"/cart"}>
              <button
                type="button"
                className="relative inline-flex items-center border-none p-2 text-center text-sm font-medium text-black/80 focus:outline-none focus:ring-blue-300"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                {cartQuantity > 0 && (
                  <div className="absolute -end-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 p-2 text-xs font-bold text-white ">
                    {cartQuantity}
                  </div>
                )}
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
