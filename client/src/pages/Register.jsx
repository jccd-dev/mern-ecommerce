const Register = () => {
  const imgURL =
    "https://images.unsplash.com/photo-1551489186-ccb95a1ea6a3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      className="w-screen h-screen bg-cover flex items-center justify-center relative"
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className="absolute w-full h-full bg-slate-600/20 inset-0 z-0"></div>
      <div className="wrapper w-2/5 p-5 bg-white z-10">
        <h1 className="title text-2xl font-[300] uppercase">
          Create An Account
        </h1>
        <form className="form flex flex-wrap">
          <input
            type="text"
            name="name"
            id="name"
            className="flex-1 min-w-[40%] p-2 mt-5 mr-2 mb-0 ml-0 outline-none border"
            placeholder="First Name"
          />
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="flex-1 min-w-[40%] p-2 mt-5 mr-2 mb-0 ml-0 outline-none border"
            placeholder="Last Name"
          />
          <input
            type="text"
            name="username"
            id="username"
            className="flex-1 min-w-[40%] p-2 mt-5 mr-2 mb-0 ml-0 outline-none border"
            placeholder="User Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            className="flex-1 min-w-[40%] p-2 mt-5 mr-2 mb-0 ml-0 outline-none border"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            id="password"
            className="flex-1 min-w-[40%] p-2 mt-5 mr-2 mb-0 ml-0 outline-none border"
            placeholder="Password"
          />
          <input
            type="password"
            name="c_password"
            id="c_password"
            className="flex-1 min-w-[40%] p-2 mt-5 mr-2 mb-0 ml-0 outline-none border"
            placeholder="Confirm Password"
          />
          <span className="agreement text-sm my-5 ">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="button w-2/5 border-none py-4 px-5 bg-sage-500 text-white cursor-pointer font-semibold hover:bg-sage-600">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
