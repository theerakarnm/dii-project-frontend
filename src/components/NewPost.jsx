import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Textarea } from "@nextui-org/react";

const NewPost = () => {
  const [margin, setMargin] = useState(".75rem");
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    // <div {...getRootProps()}>
    //   <input {...getInputProps()} />
    //   {isDragActive ? (
    //     <p>Drop the files here ...</p>
    //   ) : (
    //     <p>Drag 'n' drop some files here, or click to select files</p>
    //   )}
    // </div>
    <>
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
      </div>
    </>
  );
};

export default NewPost;
