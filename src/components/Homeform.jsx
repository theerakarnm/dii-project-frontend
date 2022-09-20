import React from 'react';
import { Avatar, Textarea, Text, Card, Modal, Image } from '@nextui-org/react';

const Homeform = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center '>
        <div className='max-w-5xl w-full h-full flex flex-col m-auto'>
          <div className=' w-full  grid grid-cols-3 md:gap-4 gap-0 items-center my-3 p-2 '>
            <div className='md:p-2 p-1'>
              <Text
                h1
                className='md:text-[2rem] text-[1.5rem]'
                weight='bold'
                css={{
                  textGradient: '45deg, $purple600 -20%, $pink600 100%',
                }}
              >
                <p>
                  <span className=''>Nuthipong</span>{' '}
                  <span className=''>Pinyai</span>{' '}
                </p>
              </Text>
              <Text
                h1
                className='md:text-[1rem] text-[0.8rem] '
                css={{
                  textGradient: '45deg, $purple600 -20%, $pink600 100%',
                }}
                weight='bold'
              >
                click_ntp@testmail.com
              </Text>
            </div>

            <div className=' flex justify-center items-center '>
              <div className='md:h-[12rem] md:w-[12rem] w-[7rem] h-[7rem]'>
                <Avatar
                  className='w-full h-full'
                  src='/Logowithoutfont.png'
                  color='secondary'
                  bordered
                />
              </div>
            </div>

            <div className='flex flex-col justify-center items-center md:p-2'>
              <div className='w-full pt-10 md:pt-1'>
                <Textarea
                  width='100%'
                  bordered
                  color='secondary'
                  labelPlaceholder='Add your Bio'
                />
              </div>
              <div className='w-full flex flex-row justify-around items-center mt-5 '>
                <div>
                  <p className='text-sm md:text-xl'>
                    55 <span className='text-xs md:text-lg'>Post</span>
                  </p>
                </div>
                <div>
                  <p className='text-sm md:text-xl'>
                    55 <span className='text-xs md:text-lg'>Diary</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full border-t border-purple-300 flex justify-center'></div>

          <div className='w-full h-full  grid gap-4 md:grid-cols-3 grid-cols-2 px-5'>
            <div className='  flex items-center'>
              <Card isPressable onClick={handler} css={{ w: '100%', h: '85%' }}>
                <Card.Header
                  css={{ position: 'absolute', zIndex: 1, top: 5 }}
                ></Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src='https://earena.com/media/team/logo/500x500.jpeg'
                    width='100%'
                    height='100%'
                    objectFit='cover'
                    alt='Card example background'
                  />
                </Card.Body>
              </Card>

              <Modal noPadding open={visible} onClose={closeHandler}>
                <Modal.Body>
                  <div className='w-[50rem] h-[50rem] bg-slate-500'></div>
                </Modal.Body>
              </Modal>
            </div>

            <div className='  flex items-center'>
              <Card isPressable onClick={handler} css={{ w: '100%', h: '85%' }}>
                <Card.Header
                  css={{ position: 'absolute', zIndex: 1, top: 5 }}
                ></Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src='https://i2.wp.com/dynamicwork.net/wp/wp-content/uploads/2013/10/500x500.gif?ssl=1'
                    width='100%'
                    height='100%'
                    objectFit='cover'
                    alt='Card example background'
                  />
                </Card.Body>
              </Card>

              <Modal noPadding open={visible} onClose={closeHandler}>
                <Modal.Body>
                  <div className='w-[50rem] h-[50rem] bg-slate-500'></div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeform;
