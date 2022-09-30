import React from 'react';
import { Avatar, Text, Button, Modal } from '@nextui-org/react';
import Comment from '../Posts/Comment';
import PropType from 'prop-types';

const ModalBody = ({ data, hasImage }) => {
  if (!data) return <></>;
  if (!hasImage) {
    return (
      <>
        <Modal.Header className='m-0 p-0 w-full h-full pt-4 pl-4'>
          <div className='w-full flex justify-between'>
            <div className='w-full  flex justify-start items-center px-3'>
              <div className='min-h-lg'>
                <Avatar
                  src={`${data.profileImage}`}
                  color='secondary'
                  bordered
                />
              </div>
              <div className='pl-2 flex flex-col items-center'>
                <div>
                  <Text
                    h1
                    className='md:text-[1.1rem] text-[0.9rem] font-[Nunito]'
                    weight='bold'
                    css={{
                      textGradient: '45deg, $purple600 -20%, $pink600 100%',
                    }}
                  >
                    {`${data.name}`}
                  </Text>
                </div>
                <div className='flex justify-start w-full text-[0.8rem] m-0 p-0 font-bold font-[Nunito]'>
                  {`${data.dateTime}`}
                </div>
              </div>
            </div>
          </div>
        </Modal.Header>

        <Modal.Body className='h-full w-full flex justify-center items-center'>
          <div className='flex justify-center items-center w-full p-[1.5px] rounded-lg border bg-gradient-to-r from-[#7928ca] to-[#ff0080]'>
            <div className='w-full h-full flex justify-center items-center rounded-md bg-slate-100 '>
              <div className='m-5'>{`${data.postContent}`}</div>
            </div>
          </div>

          <div className='w-full max-h-[13rem] px-1 py-2 overflow-auto'>
            {data.comment.map((cmt) => {
              return <Comment key={cmt.id} comment={cmt}></Comment>;
            })}
          </div>
        </Modal.Body>
      </>
    );
  }

  return (
    <>
      <Modal.Body className='h-full w-full flex m-0 p-2 '>
        <div className='w-full h-full md:max-h-[40rem] max-h-auto flex md:flex-row flex-col'>
          <div className='md:max-w-[60%] w-full flex flex-col p-3'>
            <div className='w-full h-full flex justify-center md:min-h-[30rem] min-h-[15rem] items-center bg-black rounded-lg '>
              <img
                className='md:max-h-full  w-full-image'
                src={`${data.imageUrl}`}
                alt='modal'
              />
            </div>
          </div>

          <div className='md:w-[72rem] p-3 flex flex-col'>
            <div className='w-full flex justify-between '>
              <div className='w-full  flex justify-start items-center'>
                <div className='min-h-lg'>
                  <Avatar
                    src={`${data.profileImage}`}
                    color='secondary'
                    bordered
                  />
                </div>
                <div className='pl-2 flex flex-col '>
                  <div>
                    <Text
                      h1
                      className='md:text-[1.1rem] text-[0.9rem] font-[Nunito]'
                      weight='bold'
                      css={{
                        textGradient: '45deg, $purple600 -20%, $pink600 100%',
                      }}
                    >
                      {`${data.name}`}
                    </Text>
                  </div>
                  <div className='flex  w-full text-[0.8rem] m-0 p-0 font-bold font-[Nunito]'>
                    {`${data.dateTime}`}
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full  text-[0.95rem] text-gray-800 font-[Nunito] border-b border-purple-300 px-4 py-3'>
              {`${data.postContent}`}
            </div>

            <div className='w-full h-auto px-1 py-2 overflow-auto'>
              {data.comment.map((cmt) => {
                return <Comment comment={cmt}></Comment>;
              })}
            </div>
          </div>
        </div>
      </Modal.Body>
    </>
  );
};

ModalBody.PropType = {
  data: PropType.object.isRequired,
  hasImage: PropType.bool.isRequired,
};

export default ModalBody;
