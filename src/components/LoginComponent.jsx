import { useState } from "react";
import { Image } from "@nextui-org/react";

import React from "react";

const LoginComponent = () => {
  const [valueInput, setValueInput] = useState({
    username: "",
    password: "",
  });

  function onSubmit(event) {
    event.preventDefault();
    console.log(valueInput);
  }

  const onChangeHandle = (event) => {
    setValueInput({
      ...valueInput,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="h-screen bg-[f9fafe] flex flex-col justify-center items-center">
        <div className="flex flex-col m-5">
          <div className="">
            <Image
              width={"10rem"}
              height={"10rem"}
              src="/Logowithoutfont.png"
              alt="Your Company"
            />
          </div>

          <form onSubmit={onSubmit}></form>
          <div className="w-full p-2  rounded ">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold">Sign in to your account</h1>
            </div>
          </div>
          <div className="bg-white max-w-xl  w-[38rem] h-[25rem] flex flex-col  p-8 rounded-lg shadow-xl">
            <div className="w-full p-2  rounded my-5">
              <div className="flex flex-col justify-center items-center my-10`">
                <input
                  className="w-full p-3 border rounded text-[1.25rem]"
                  type="text"
                  name="username"
                  id="username"
                  onChange={onChangeHandle}
                  value={valueInput.username}
                  placeholder="Username"
                />
              </div>

              <div className="flex flex-col justify-center items-center my-12">
                <input
                  className="w-full p-3 border rounded text-[1.25rem]"
                  type="password"
                  name="password"
                  id="password"
                  value={valueInput.password}
                  placeholder="Password"
                  onChange={onChangeHandle}
                />
              </div>

              <div className="flex flex-col justify-center items-center mt-10">
                <button
                  className="w-full p-3 transition-all bg-purple-500 hover:bg-purple-600 text-white rounded text-[1.25rem]"
                  name="bt_submit"
                  id="bt_submit"
                  type="submit"
                >
                  Sign in
                </button>
              </div>

              <div className="flex flex-col justify-center items-center my-2">
                <p>
                  Don't have an account ?
                  <a className=" text-purple-600 hover:text-purple-700 hover:font-bold">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
