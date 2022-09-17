import { useState } from "react";
import { Image } from "@nextui-org/react";

import React from "react";

const LoginComponent = () => {
  const [valueInput, setValueInput] = useState({
    username: "",
    password: "",
  });
  const [isError, setIsError] = useState({
    username: {
      error: false,
      msg: "Please fill out this field",
    },
    password: {
      error: false,
      msg: "",
    },
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
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="max-w-xl w-full bg-[f9fafe] flex flex-col justify-center items-center m-auto">
          <div className="w-full flex flex-col m-5">
            <div className="">
              <Image
                width={"10rem"}
                height={"10rem"}
                src="/Logowithoutfont.png"
                alt="Your Company"
              />
            </div>

            <form onSubmit={onSubmit}>
              <div className="w-full p-2 rounded ">
                <div className="flex flex-col justify-center items-center pb-6">
                  <h1 className="text-4xl font-bold">
                    Sign in to your account
                  </h1>
                </div>
              </div>
              <div className="bg-white w-full h-[25rem] flex flex-col  p-8 rounded-lg shadow-xl">
                <div className="w-full p-2  rounded my-5">
                  <div className="flex flex-col justify-center items-center my-10`">
                    <input
                      className={`w-full p-3 border rounded text-[1.25rem] ${
                        isError.username.error ? "ring-2 ring-red-400" : ""
                      }`}
                      type="text"
                      name="username"
                      id="username"
                      onChange={onChangeHandle}
                      value={valueInput.username}
                      placeholder="Username"
                    />
                    {isError.username.error ? (
                      <div className="flex justify-start w-full pt-1 ">
                        <small className="text-left text-red-400">
                          {isError.username.msg}
                        </small>
                      </div>
                    ) : (
                      <></>
                    )}
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
                      <a className=" text-purple-600 hover:text-purple-700 hover:font-bold pl-1">
                        Sign up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
