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
        <div onClick={handler}>file</div>
      </div>
    </>
  );
};

export default NewPost;
