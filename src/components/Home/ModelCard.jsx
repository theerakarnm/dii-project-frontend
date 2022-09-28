import { useContext } from 'react';
import React from 'react';
import { Avatar, Text, Button, Modal } from '@nextui-org/react';
import HomeStore from '../../context/contextStore_home';

const ModelCard = (data) => {
  const {
    openTextModal,
    closeTextModal,
    openEdit,
    openImgModal,
    closeImgModal,
  } = useContext(HomeStore);

  if (!data?.imageUrl)
    return (
      <div className='w-full h-full max-h-lg'>
        <Modal
          blur
          className='md:max-w-[50rem]  flex justify-center items-center md:mx-auto mx-[2rem]'
          aria-labelledby='modal-title'
          open={openTextModal}
          onClose={closeTextModal}
          width='100%'
        >
          <Modal.Header className='m-0 p-0 w-full h-full pt-4 pl-4'>
            <div className='w-full flex justify-between'>
              <div className='w-full  flex justify-start items-center'>
                <div className='min-h-lg'>
                  <Avatar
                    src={`${data.profileUrl}`}
                    color='secondary'
                    bordered
                  />
                </div>
                <div className='pl-2'>
                  <Text
                    h1
                    className='md:text-[1.3rem] text-[1rem] font-[Nunito]'
                    weight='bold'
                    css={{
                      textGradient: '45deg, $purple600 -20%, $pink600 100%',
                    }}
                  >
                    {`${data.name}`}
                  </Text>
                </div>
              </div>
              <div className='w-full flex justify-end items-center'>
                <Button
                  auto
                  onClick={openEdit}
                  className='text-purple-600 text-xl'
                >
                  ...
                </Button>
              </div>
            </div>
          </Modal.Header>

          <Modal.Body className='h-full w-full flex justify-center items-center'>
            <div className='flex justify-center items-center w-full p-[1.5px] rounded-lg border bg-gradient-to-r from-[#7928ca] to-[#ff0080]'>
              <div className='w-full h-full flex justify-center items-center rounded-md bg-slate-100 '>
                <div className='m-5'>{`${data.content}`}</div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer className='w-full flex justify-center items-center  pt-0'>
            <div className='w-[98%] h-full bottom-0 flex justify-center items-center border-2'>
              comment area
            </div>
            <div className='w-[98%] bottom-0 flex justify-center items-center '>
              <div className='w-[95%] pl-5'>
                <input
                  type='text'
                  placeholder='Type your Comment...'
                  className='w-full h-full text-[1.2rem] p-2  border-b-2 border-purple-400 focus:outline-none'
                />
              </div>
              <div className='flex justify-center items-center md:w-[5%] w-[8%]'>
                <img
                  className='cursor-pointer hover:mb-2 transition-all w-[50%] '
                  src='/sendIcon.svg'
                  alt='send comment icon'
                />
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );

  // text modal
  return (
    <div className='w-full h-full max-h-lg'>
      <Modal
        blur
        className='md:max-w-[80rem]  flex justify-center items-center md:mx-auto mx-[2rem]'
        aria-labelledby='modal-title'
        open={openImgModal}
        onClose={closeImgModal}
        width='100%'
      >
        <Modal.Header className='m-0 p-0 w-full h-full pt-4 pl-4'>
          <div className='w-full flex justify-between'>
            <div className='w-full  flex justify-start items-center'>
              <div className='min-h-lg'>
                <Avatar src={`${data.profileUrl}`} color='secondary' bordered />
              </div>
              <div className='pl-2'>
                <Text
                  h1
                  className='md:text-[1.3rem] text-[1rem] font-[Nunito]'
                  weight='bold'
                  css={{
                    textGradient: '45deg, $purple600 -20%, $pink600 100%',
                  }}
                >
                  {`${data.name}`}
                </Text>
              </div>
            </div>
            <div className='w-full flex justify-end items-center'>
              <Button
                auto
                onClick={openEdit}
                className='text-purple-600 text-xl'
              >
                ...
              </Button>
            </div>
          </div>
        </Modal.Header>

        <Modal.Body className='h-full w-full flex justify-center items-center m-0 px-5 md:pb-[1.3rem] '>
          <div className='w-full h-full md:max-h-[40rem] max-h-auto flex md:flex-row flex-col'>
            <div className='md:max-w-[60%] w-full  flex flex-col'>
              <div className='w-full h-full flex justify-center md:min-h-[30rem] min-h-[15rem] items-center bg-black rounded-lg '>
                <img
                  className='w-full md:max-h-full rounded-lg'
                  src={`${data.imageUrl}`}
                  alt='modal'
                />
              </div>
            </div>
            <div className='w-full '>
              <div className='w-full h-[90%] border pl-4 pt-2'>
                comment area
              </div>
              <div className='w-[98%] h-[10%] bottom-0 flex justify-center items-center '>
                <div className='w-[95%] pl-5'>
                  <input
                    type='text'
                    placeholder='Type your Comment...'
                    className='w-full h-full text-[1.2rem] p-2  border-b-2 border-purple-400 focus:outline-none'
                  />
                </div>
                <div className='flex justify-center items-center md:w-[5%] '>
                  <img
                    className='cursor-pointer hover:mb-2 transition-all md:w-[80%]'
                    src='/sendIcon.svg'
                    alt='send comment icon'
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModelCard;
