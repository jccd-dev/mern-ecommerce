const Login = () => {
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
        <form className="form flex flex-col" id="login_form">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="my-2 min-w-[40%] flex-1 border p-2 outline-none"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="my-2 min-w-[40%] flex-1 border p-2 outline-none"
          />
          <button className="login mb-3 w-full cursor-pointer border-none bg-sage-500 px-5 py-3 text-white hover:bg-sage-600">
            LOGIN
          </button>
          <a
            href=""
            className="link my-2 cursor-pointer text-xs uppercase text-slate-900 hover:underline"
          >
            Forgot password?
          </a>
          <a
            href=""
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
