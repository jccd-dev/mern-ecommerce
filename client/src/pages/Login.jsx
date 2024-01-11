const Login = () => {
  const imgURL =
    "https://images.unsplash.com/photo-1554342872-034a06541bad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      className="w-screen h-screen bg-cover flex items-center justify-center relative"
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className="absolute w-full h-full bg-slate-600/20 inset-0 z-0"></div>
      <div className="wrapper w-1/4 p-5 bg-white z-10">
        <h1 className="title tex-2xl font-[300]">SIGN IN</h1>
        <form className="form flex flex-col" id="login_form">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="flex-1 min-w-[40%] my-2 p-2 outline-none border"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="flex-1 min-w-[40%] my-2 p-2 outline-none border"
          />
          <button className="login w-full border-none py-3 px-5 bg-sage-500 hover:bg-sage-600 text-white cursor-pointer mb-3">
            LOGIN
          </button>
          <a
            href=""
            className="link uppercase my-2 text-xs hover:underline cursor-pointer text-slate-900"
          >
            Forgot password?
          </a>
          <a
            href=""
            className="link uppercase my-2 text-xs hover:underline cursor-pointer text-slate-900"
          >
            Create new account
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
