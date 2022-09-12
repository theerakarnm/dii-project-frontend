import react from "react";
import { Image } from "@nextui-org/react";
import autoprefixer from "autoprefixer";

function onSubmit() {}

const LoginForm = () => {
  return (
    <div className="h-screen bg-[f9fafe] flex flex-col justify-center items-center">
      <div className="bg-white max-w-xl  w-[38rem] h-[38rem] flex flex-col  p-8 rounded-lg shadow-xl">
        <div className="w-full flex justify-center">
          <div className="w-[11rem]">
            <Image
              width={autoprefixer}
              height={autoprefixer}
              src="/Logo.png"
              alt="logo"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full p-2  rounded ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">Login</h1>
          </div>
        </div>
        <div className="w-full p-2  rounded my-5">
          <div className="flex flex-col justify-center items-center my-10`">
            <input
              className="w-full p-3 border rounded text-[1.25rem]"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </div>

          <div className="flex flex-col justify-center items-center my-12">
            <input
              className="w-full p-3 border rounded text-[1.25rem]"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <div className="flex flex-col justify-center items-center mt-10">
            <button
              className="w-full p-3 transition-all bg-purple-500 hover:bg-purple-600 text-white rounded text-[1.25rem]"
              name="bt_submit"
              id="bt_submit"
            >
              Login
            </button>
          </div>

          <div className="flex flex-col justify-center items-center my-2">
            <p>
              Don't have an account ?
              <a className=" text-blue-600 hover:text-blue-700 hover:font-bold">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
