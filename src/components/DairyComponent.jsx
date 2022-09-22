import React from "react";
import { getCookie } from "../libs/getterSetterCookie";

const DiaryComponent = () => {
  const cookie = getCookie("login_data");

  return (
    <>
      <div className="flex justify-center bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-3xl md:max-w-[55rem] p-3">
        <div className="flex flex-row items-start px-4 py-6 w-full">
          <div className="mr-2">
            <img
              className="w-12 h-12 rounded-full object-cover mr-4 shadow"
              src={`${cookie.imageUrl}`}
              alt="avatar"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <div>
                <p class="text-xl font-semibold mb-2">
                  {`${cookie.firstName} ${cookie.lastName}`}
                </p>
              </div>
              <div>
                <p className="text-sm mt-1">22h ago</p>
              </div>
            </div>
            <div className="w-[45rem] h-[38rem] border border-purple-300 ">
              img
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
export default DiaryComponent;
