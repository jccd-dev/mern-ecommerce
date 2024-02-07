import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { publicRequest } from "../utils/requestMethod";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    isError: false,
    errorsData: null,
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await publicRequest.post("auth/register", registerForm);
      setIsLoading(false);
      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      setErrors({
        isError: true,
        errorsData: error.response.data,
      });
    }
  };
  const imgURL =
    "https://images.unsplash.com/photo-1551489186-ccb95a1ea6a3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      className="relative flex h-screen w-full items-center justify-center bg-center object-cover md:bg-cover"
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className="absolute inset-0 z-0 h-full w-full bg-slate-600/20"></div>
      <div className="wrapper z-10 mx-3 w-full bg-white p-5 md:mx-0 md:w-2/5">
        <h1 className="title text-2xl font-[300] uppercase">
          Create An Account
        </h1>
        {errors?.isError && (
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {errors.errorsData.errors?.map((error, index) => (
              <span
                className="w-auto bg-red-50 p-1 text-xs text-red-500"
                key={index}
              >
                {Object.values(error)}
              </span>
            ))}
          </div>
        )}
        <form className="form flex flex-wrap" onSubmit={handleSubmit}>
          <input
            type="text"
            value={registerForm.firstName}
            name="firstName"
            onChange={handleChangeInput}
            id="name"
            className="mb-0 ml-0 mr-2 mt-5 min-w-[100%] flex-1 border p-2 outline-none sm:min-w-[40%]"
            placeholder="First Name"
          />
          <input
            type="text"
            value={registerForm.lastName}
            name="lastName"
            onChange={handleChangeInput}
            id="last_name"
            className="mb-0 ml-0 mr-2 mt-5 min-w-[100%] flex-1 border p-2 outline-none sm:min-w-[40%]"
            placeholder="Last Name"
          />
          <input
            type="text"
            value={registerForm.username}
            name="username"
            onChange={handleChangeInput}
            id="username"
            className="mb-0 ml-0 mr-2 mt-5 min-w-[100%] flex-1 border p-2 outline-none sm:min-w-[40%]"
            placeholder="User Name"
          />
          <input
            type="email"
            value={registerForm.email}
            name="email"
            onChange={handleChangeInput}
            id="email"
            className="mb-0 ml-0 mr-2 mt-5 min-w-[100%] flex-1 border p-2 outline-none sm:min-w-[40%]"
            placeholder="Email"
          />
          <input
            type="text"
            value={registerForm.phoneNumber}
            name="phoneNumber"
            onChange={handleChangeInput}
            id="p_number"
            className="mb-0 ml-0 mr-2 mt-5 min-w-[100%] flex-1 border p-2 outline-none md:min-w-[40%]"
            placeholder="Phone Number"
          />
          <input
            type="password"
            value={registerForm.password}
            name="password"
            onChange={handleChangeInput}
            id="password"
            className="mb-0 ml-0 mr-2 mt-5 min-w-[100%] flex-1 border p-2 outline-none md:min-w-[40%]"
            placeholder="Password"
          />
          <Link to={"/login"} className="mt-2">
            <span className="agreement text-sm">I have an acount</span>
          </Link>

          <span className="agreement mb-5 mt-3 text-sm ">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button
            className="button w-2/5 cursor-pointer border-none bg-sage-500 px-5 py-4 font-semibold text-white hover:bg-sage-600 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
