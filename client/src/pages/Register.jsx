// import { Link } from "react-router-dom";
const Register = () => {
  const imgURL =
    "https://images.unsplash.com/photo-1551489186-ccb95a1ea6a3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      className="relative flex h-screen w-screen items-center justify-center bg-center object-cover md:bg-cover"
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className="absolute inset-0 z-0 h-full w-full bg-slate-600/20"></div>
      <div className="wrapper z-10 mx-3 w-full bg-white p-5 md:mx-0 md:w-2/5">
        <h1 className="title text-2xl font-[300] uppercase">
          Create An Account
        </h1>
        <form className="form flex flex-col md:flex-wrap">
          <input
            type="text"
            name="name"
            id="name"
            className="mb-0 ml-0 mr-2 mt-5 min-w-[40%] flex-1 border p-2 outline-none"
            placeholder="First Name"
          />
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="mb-0 ml-0 mr-2 mt-5 min-w-[40%] flex-1 border p-2 outline-none"
            placeholder="Last Name"
          />
          <input
            type="text"
            name="username"
            id="username"
            className="mb-0 ml-0 mr-2 mt-5 min-w-[40%] flex-1 border p-2 outline-none"
            placeholder="User Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            className="mb-0 ml-0 mr-2 mt-5 min-w-[40%] flex-1 border p-2 outline-none"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            id="password"
            className="mb-0 ml-0 mr-2 mt-5 min-w-[40%] flex-1 border p-2 outline-none"
            placeholder="Password"
          />
          <input
            type="password"
            name="c_password"
            id="c_password"
            className="mb-0 ml-0 mr-2 mt-5 min-w-[40%] flex-1 border p-2 outline-none"
            placeholder="Confirm Password"
          />
          <span className="agreement text-md my-3 ">I have an acount</span>
          <span className="agreement mb-5 mt-3 text-sm ">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="button w-2/5 cursor-pointer border-none bg-sage-500 px-5 py-4 font-semibold text-white hover:bg-sage-600">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
