import { useContext, useState, useCallback } from 'react';
import {
  Avatar,
  Textarea,
  Text,
  Button,
  Modal,
  Card,
  Loading,
} from '@nextui-org/react';
import ModelCard from './ModelCard';
import HomeStore from '../../context/contextStore_home';

const CardHome = ({ data }) => {
  const [isBlur, setIsBlur] = useState(false);
  const { openModal, setPostId } = useContext(HomeStore);

  const onMouseOver = () => setIsBlur(true);
  const onMouseLeave = () => setIsBlur(false);

  const openModelHandler = async () => {
    console.log(data.id);
    await openModal(data.id);
  };

  if (!data?.imageUrl)
    return (
      <div
        onClick={openModelHandler}
        className='hover:cursor-pointer row-span-2'
      >
        <div className='flex justify-center items-center w-full h-full p-[1.5px] rounded-lg border bg-gradient-to-r from-[#7928ca] to-[#ff0080]'>
          <Card css={{ w: '100%', h: '100%' }} className='rounded-lg'>
            <Card.Header>
              <Text
                css={{
                  position: 'absolute',
                  zIndex: 1,
                  top: 10,
                  w: '100%',
                  h: '100%',
                }}
                className=' text-black'
              >
                {data.dateTime}
              </Text>
            </Card.Header>
            <Card.Body className='flex justify-center items-center'>
              <div className='flex justify-center items-center w-full h-full p-[1.5px] rounded-lg border bg-gradient-to-r from-[#7928ca] to-[#ff0080]'>
                <div className='w-full h-full flex justify-center items-center rounded-md bg-slate-100'>
                  <div className='m-5'>{data.content}</div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );

  return (
    <div
      onClick={openModelHandler}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className='hover:cursor-pointer row-span-4 '
    >
      <Card css={{ w: '100%', h: '100%' }}>
        <Card.Body css={{ p: 0 }}>
          <Text
            css={{
              position: 'absolute',
              zIndex: 1,
              top: 5,
              w: '90%',
              h: '90%',
            }}
            className='text-white pt-2 ml-3 opacity-0 transition-all hover:opacity-100'
          >
            {data.dateTime}
          </Text>
          <Card.Image
            src={data.imageUrl}
            className={`${
              isBlur ? 'blur-sm' : ''
            } transition-all w-full h-full`}
            width='100%'
            height='100%'
            objectFit='cover'
            alt='Card example background'
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardHome;
