import React, { useCallback } from 'react';
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react';

export default function ModalDragFile({
  visible,
  closeHandler,
  cancelImage,
  getRootProps,
  getInputProps,
  isDragActive,
  image,
}) {
  console.log(image);
  return (
    <div>
      <Modal
        closeButton
        aria-labelledby='modal-title'
        open={visible}
        width='600px'
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id='modal-title' size={18}>
            Add Image
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div className='flex justify-center items-center'>
            <div className='max-w-lg w-full'>
              <div className='w-full max-h-sm bg-gray-50 border-dashed p-3 border-[1.5px] border-gray-300 rounded-lg'>
                <div
                  className='flex justify-center items-center w-full h-full'
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p className='text-gray-600 font-semibold'>
                      Drop the files here ...
                    </p>
                  ) : !image ? (
                    <p className='text-gray-600 font-semibold'>
                      Drop file here / Click to select
                    </p>
                  ) : (
                    <img
                      className='w-full h-full rounded shadow'
                      src={image}
                      alt='preview image'
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {!image ? (
            ' '
          ) : (
            <Button
              className='text-white bg-red-400 hover:bg-red-500'
              auto
              flat
              onClick={cancelImage}
            >
              Remove
            </Button>
          )}
          <Button
            className='bg-purple-400 hover:bg-purple-500'
            auto
            onClick={closeHandler}
          >
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
