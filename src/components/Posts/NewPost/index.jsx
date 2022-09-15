import React, { useCallback, useState } from "react";
import { Textarea } from "@nextui-org/react";
import ModalDragFile from "./ModalDragFile";
import { useDropzone } from "react-dropzone";

import fileToBase64 from "../../../libs/FileConverter";

const NewPost = () => {
  const [margin, setMargin] = useState(".75rem");
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    setImage("");
    console.log("closed");
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    console.log(acceptedFiles);
    console.log(await fileToBase64(acceptedFiles[0]));
    setImage(await fileToBase64(acceptedFiles[acceptedFiles.length - 1]));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <ModalDragFile
        visible={visible}
        closeHandler={closeHandler}
        getInputProps={getInputProps}
        getRootProps={getRootProps}
        isDragActive={isDragActive}
        image={image}
      />
      <div
        style={{
          paddingTop: margin,
        }}
        className="bg-white shadow rounded-lg max-w-lg w-full p-3 transition-all duration-300"
      >
        <div>
          <Textarea
            css={{
              width: "100%",
            }}
            className="hover:ring-1 ring-purple-300"
            labelPlaceholder="Share something about today..."
            status="Share something about today..."
            onFocus={() => setMargin("2.75rem")}
            onBlur={() => setMargin(".75rem")}
          />
        </div>
        <hr className=" mt-3" />
        <div className="flex justify-between items-center">
          <div
            className="h-[2rem] mt-2 ml-1 cursor-pointer flex items-center text-gray-500 hover:text-purple-400 transition-all"
            onClick={handler}
          >
            <img
              className="h-full"
              src="/icons8-image-96.png"
              alt="image insert icon"
            />
            <span className="text-xs ml-1 sm:text-sm">Insert Image</span>
          </div>
          <div className="h-[2.5rem] mt-2 ml-1 cursor-pointer flex items-center text-gray-500 hover:text-purple-400 transition-all">
            <button class="h-full relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-purple-600 rounded group active:bg-purple-500 focus:outline-none focus:ring">
              <span class="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span class="text-sm font-medium transition-all group-hover:mr-4">
                Share
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPost;
