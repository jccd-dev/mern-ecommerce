import { useState } from "react";
import { login } from "../utils/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const { from, fromCart } = location.state || {
    from: { pathname: "/" },
    fromCart: false,
  };

  const userLogin = useSelector((state) => state.user);

  console.log(userLogin);
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, loginData);

    if (!userLogin.isError.error) {
      if (fromCart) {
        navigate("/cart");
      } else {
        navigate(from.pathname);
      }
    }

    console.log(loginData);
  };

  const imgURL =
    "https://images.unsplash.com/photo-1554342872-034a06541bad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      className="relative flex h-screen w-screen items-center justify-center bg-center object-cover md:bg-cover"
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className="absolute inset-0 z-0 h-full w-full bg-slate-600/20"></div>
      <div className="wrapper z-10  mx-3 w-full bg-white p-5 md:mx-0 md:w-1/4">
        <h1 className="title tex-2xl font-[300]">SIGN IN</h1>
        {userLogin.isError.error && (
          <ul className="mb-2 ml-4 list-disc text-sm text-red-500">
            {userLogin.isError.message?.map((error, index) => (
              <li className="" key={index}>
                {Object.values(error)}
              </li>
            ))}
          </ul>
        )}

        <form
          className="form flex flex-col"
          id="login_form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={loginData.username}
            name="username"
            id="username"
            onChange={handleChangeInput}
            placeholder="Email"
            className="my-2 min-w-[40%] flex-1 border p-2 outline-none"
          />
          <input
            type="password"
            value={loginData.password}
            name="password"
            id="password"
            onChange={handleChangeInput}
            placeholder="Password"
            className="my-2 min-w-[40%] flex-1 border p-2 outline-none"
          />
          <button
            className="login mb-3 w-full cursor-pointer border-none bg-sage-500 px-5 py-3 text-white hover:bg-sage-600 disabled:cursor-not-allowed disabled:bg-sage-600/70"
            type="submit"
            disabled={userLogin.isFetching}
          >
            LOGIN
          </button>
          <a
            href=""
            className="link my-2 cursor-pointer text-xs uppercase text-slate-900 hover:underline"
          >
            Forgot password?
          </a>
          <a
            href="/register"
            className="link my-2 cursor-pointer text-xs uppercase text-slate-900 hover:underline"
          >
            Create new account
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
