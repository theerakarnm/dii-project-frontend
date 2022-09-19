import React from "react";
import { Avatar, Textarea, Text, Card, Modal, Image } from "@nextui-org/react";






const Homeform = () => {

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center ">
        <div className="max-w-5xl w-full h-full flex flex-col m-auto">
          <div className=" w-full  grid grid-cols-3 md:gap-4 gap-0 items-center my-3 p-2 ">

            <div className="md:p-2 p-1">
              <Text h1 className="md:text-[2rem] text-[1.5rem]" weight="bold"
                css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%",}}
              >
                
                {/* Nuthipong Pinyai */}

              </Text>
              <Text h1 className="md:text-[1rem] text-[0.8rem] "
                css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%", }} weight="bold">

                click_ntp@testmail.com

              </Text>


              <div className="w-full h-auto border-1">
                
              </div>

            </div>

            <div className=" flex justify-center items-center ">
              <div className="md:h-[12rem] md:w-[12rem] w-[7rem] h-[7rem]">
                <Avatar
                  className="w-full h-full"
                  src="/Logowithoutfont.png"
                  color="secondary"
                  bordered
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center md:p-2">
              <div className="w-full pt-10 md:pt-1">
                <Textarea
                  width="100%"
                  bordered
                  color="secondary"
                  labelPlaceholder="Add your Bio"
                />
              </div>
              <div className="w-full flex flex-row justify-around items-center mt-5 ">
                <div>
                  <p className="text-sm md:text-xl">55 <span className="text-xs md:text-lg">Post</span></p>
                </div>
                <div>
                  <p className="text-sm md:text-xl">55 <span className="text-xs md:text-lg">Diary</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-purple-300 flex justify-center"></div>

          <div className="w-full h-full  grid gap-4 md:grid-cols-3 grid-cols-2 px-5">


          </div>



        </div>
      </div>
    </>
  );
};

export default Homeform;
