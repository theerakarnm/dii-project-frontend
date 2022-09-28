import { useState } from 'react';
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


const CardHome = ({ data, openImgCard, openTextCard }) => {
  const [isBlur, setIsBlur] = useState(false);

  const onMouseOver = () => setIsBlur(true);
  const onMouseLeave = () => setIsBlur(false);

  const click = () => {
    console.log(data.id);
  }

  if (!data?.imageUrl)
    return (
      <div onClick={click} className='hover:cursor-pointer row-span-2'>
        <div className='flex justify-center items-center w-full h-full p-[1.5px] rounded-lg border bg-gradient-to-r from-[#7928ca] to-[#ff0080]'>
          <Card css={{ w: '100%', h: '200px' }} className='rounded-lg'>
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
      onClick={click}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className='hover:cursor-pointer row-span-4 '
    >
      <Card css={{ w: '100%', h: '400px' }}>
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
            className={`${isBlur ? 'blur-sm' : ''} transition-all`}
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
