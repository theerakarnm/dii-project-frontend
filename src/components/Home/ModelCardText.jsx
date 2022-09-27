import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCookie } from '../libs/getterSetterCookie';
import NotLoginInfo from '../components/NotLoginInfo';
import { fetchApi } from '../helpers/fetchApi';
import Navbar from '../components/Navbar';
import {
  Avatar,
  Textarea,
  Text,
  Button,
  Modal,
  Card,
  Loading,
} from '@nextui-org/react';
import ErrorComponent from '../components/ErrorComponent';
import CardHome from '../components/Home/Card';

const ModelCardText = (cardTextOpen, closeCardText, openEdit, userData) => {
  return (
    <div className='w-full h-full max-h-lg'>
      <Modal
        blur
        className='md:max-w-[50rem]  flex justify-center items-center md:mx-auto mx-[2rem]'
        aria-labelledby='modal-title'
        open={cardTextOpen}
        onClose={closeCardText}
        width='100%'
      >
        <Modal.Header className='m-0 p-0 w-full h-full pt-4 pl-4'>
          <div className='w-full flex justify-between'>
            <div className='w-full  flex justify-start items-center'>
              <div className='min-h-lg'>
                <Avatar
                  src={`${userData.imageUrl}`}
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
                  {`${userData.name}`}
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
              <div className='m-5'>2+2=4</div>
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
};

export default ModelCardText;
