import { useContext, useState, useCallback } from 'react';
import { Text, Card } from '@nextui-org/react';
import ModelCard from './ModelCard';
import HomeStore from '../../context/contextStore_home';
import PropType from 'prop-types';

const CardHome = ({ data }) => {
  const [isBlur, setIsBlur] = useState(false);
  const { openModal, setPostId } = useContext(HomeStore);

  const onMouseOver = () => setIsBlur(true);
  const onMouseLeave = () => setIsBlur(false);

  const openModelHandler = async () => {
    await openModal(data.id);
  };

  if (!data?.imageUrl)
    return (
      <div
        onClick={openModelHandler}
        // row-span-2
        className='hover:cursor-pointer row-span-2 '
      >
        <Card
          css={{ w: '100%', h: '100%' }}
          className='rounded-lg border border-purple-200'
        >
          <Card.Header>
            <Text
              css={{
                position: 'absolute',
                zIndex: 1,
                top: 10,
                w: '100%',
                h: '100%',
              }}
              className=' text-purple-400'
              weight='bold'
            >
              <span className='font-thin text-black'>Post at </span>
              {data.dateTime}
            </Text>
          </Card.Header>
          <Card.Body className='flex justify-center items-center'>
            <div className='w-full h-full flex justify-center items-center rounded-md bg-slate-100 border border-purple-200'>
              <div className='w-full md:max-h-[10rem] max-h-[8rem] text-clip overflow-hidden  p-[0.8rem]'>
                <p className='flex  h-full justify-center items-center'>
                  {data.content}
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
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
            className='text-purple-500 font-bold pt-2 ml-3 opacity-0 transition-all hover:opacity-100'
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
          />
        </Card.Body>
      </Card>
    </div>
  );
};

CardHome.PropType = {
  data: PropType.object.isRequired,
};

export default CardHome;
