import React, { useState } from "react";

const Signupform = () => {
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "", 
        username: "",
        password: "",
        confirmPassword: "",
    });
    
    function onSubmit(event) {
        event.preventDefault();
        console.log(value);
    }

    const onChange = (event) => {
        setValue({
          ...value,
          [event.target.name]: event.target.value,
        });
      };


    return (
        <div className="min-h-screen bg-[f9fafe] flex flex-col justify-center">
            <div className="max-w-xl w-full mx-auto  bg-white p-8 rounded-lg drop-shadow-xl border">
                {/* Head Sign up */}
                <div className="max-w-md w-full mx-auto mb-[20px]">
                    <div className="text-center font-medium text-3xl">SIGN UP</div>
                </div>
                {/* from sign up */}
                <form className="space-y-6 mt-4" onSubmit={onSubmit}>
                    <div className="flex items-center">
                        <div className="flex items-center w-[48%] mr-[2%]">
                            <input className="w-full p-2 border border-gray-300 rounded"
                                placeholder="First Name"
                                type="text"
                                name="firstName" id="firstName"
                                value={value.firstName}
                                onChange={onChange}
                            />
                        </div>
                        <div className="flex items-center w-[48%] ml-[2%]">
                            <input className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Last Name"
                                type="text"
                                name="lastName" id="lastName"
                                value={value.lastName}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div>
                        <input className="w-full p-2 border border-gray-300 rounded" placeholder="Email"
                            type="email"
                            name="email" id="email"
                            value={value.email}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <input className="w-full p-2 border border-gray-300 rounded" placeholder="User Name"
                            type="text"
                            name="userName" id="userName"
                            value={value.username}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <input className="w-full p-2 border border-gray-300 rounded" placeholder="Password"
                            type="password"
                            name="password" id="password"
                            value={value.password}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <input className="w-full p-2 border border-gray-300 rounded" placeholder="Confirm Password"
                            type="password"
                            name="confirmPassword" id="confirmPassword"
                            value={value.confirmPassword}
                            onChange={onChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input className="h-4 w-4 text-purple-400 rounded"
                                type="checkbox"
                            />
                            <label className="ml-2 text-sm text-purple-600">Remember Me</label>
                        </div>
                    </div>
                    <div>
                        <button className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-md text-white text-medium" >Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Signupform;