import React, { useState } from "react";

export default function Regis() {
    const [f_name] = useState();
    const [l_name] = useState();
    const [userName] = useState();
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto  bg-white p-8 border border-gray-100 rounded-[15px]">
                 {/* Head Sign up */}
                <div className="max-w-md w-full mx-auto mb-[20px]">
                    <div className="text-center font-medium text-3xl">SIGN UP</div>
                </div>
                {/* from sign up */}
                <form className="space-y-6 mt-4">
                    <div>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="First Name" />
                    </div>
                    <div>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Last Name" />
                    </div>
                    <div>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="User Name" />
                    </div>
                    <div>
                        <input type="password" className="w-full p-2 border border-gray-300 rounded" placeholder="Password" />
                    </div>
                    <div>
                        <input type="password" className="w-full p-2 border border-gray-300 rounded" placeholder="Confirm Password" />
                    </div>
                </form>
            </div>

        </div>
    );
};