import React from 'react';
import {
  Avatar,
  Textarea,
  Text,
  Button,
  Modal,
  Card,
  Col,
} from '@nextui-org/react';
import { getCookie } from '../libs/getterSetterCookie';

const Homeform = () => {
  const cookie = getCookie('login_data');
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const open = () => setCardOpen(true);
  const [cardOpen, setCardOpen] = React.useState(false);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center '>
        <div className='max-w-5xl w-full h-full flex flex-col m-auto'>
          <div className=' w-full  grid grid-cols-3 md:gap-4 gap-0 items-center my-3 p-2 '>
            <div className=''>
              <dir>
                <Text
                  h1
                  className='md:text-[2rem] text-[1.5rem]'
                  weight='bold'
                  css={{
                    textGradient: '45deg, $purple600 -20%, $pink600 100%',
                  }}
                >
                  {/* Nuthipong Pinyai  */}

                  {`${cookie.firstName} ${cookie.lastName}`}
                </Text>
                <Text
                  h1
                  className='md:text-[1.3rem] text-[0.8rem]  border-2 md:ml-5 ml-2'
                  css={{
                    textGradient: '45deg, $purple600 -20%, $pink600 100%',
                  }}
                  weight='bold'
                >
                  {/* click_ntp@testmail.com */}

                  {`${cookie.email}`}
                </Text>
              </dir>

              <div className=''></div>
            </div>

            <div className=' flex justify-center items-center '>
              <div className='md:h-[12rem] md:w-[12rem] w-[7rem] h-[7rem]'>
                <Avatar
                  className='w-full h-full'
                  src={`${cookie.imageUrl}`}
                  color='secondary'
                  bordered
                />
              </div>
            </div>

            <div className='flex flex-col justify-center items-end md:p-2'>
              <div className='w-full flex justify-end items-end mb-2'>
                <Button
                  auto
                  className='text-purple-600 border-solid border-purple-300 border-[1px] px-2
                                        hover:bg-purple-400 hover:text-white '
                  onClick={handler}
                >
                  Edit Profile
                </Button>
              </div>

              <div className='w-full'>
                <Textarea
                  width='100%'
                  bordered
                  color='secondary'
                  labelPlaceholder='Add your Bio'
                  value=' '
                />
              </div>

              <div className='w-full flex flex-row justify-around items-center mt-5 '>
                <div>
                  <Text
                    css={{
                      textGradient: '45deg, $purple600 -20%, $pink600 100%',
                    }}
                    weight='bold'
                  >
                    <span className='text-2xl'>500</span> post
                  </Text>
                </div>
                <div>
                  <Text
                    css={{
                      textGradient: '45deg, $purple600 -20%, $pink600 100%',
                    }}
                    weight='bold'
                  >
                    <span className='text-2xl'>500</span> diary
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full border-t border-purple-300 flex justify-center'></div>
          <div className='w-full h-full  grid gap-5 md:grid-cols-3 grid-cols-2 px-5 mt-5'>
            <div onClick={open} className='hover:cursor-pointer'>
              <Card css={{ w: '100%', h: '400px' }}>
                <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={12}
                      weight='bold'
                      transform='uppercase'
                      color='#ffffffAA'
                    >
                      Plant a tree
                    </Text>
                    <Text h4 color='white'>
                      Contribute to the planet
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src='https://nextui.org/images/card-example-3.jpeg'
                    width='100%'
                    height='100%'
                    objectFit='cover'
                    alt='Card example background'
                  />
                </Card.Body>
              </Card>
            </div>

            <div onClick={open} className='hover:cursor-pointer'>
              <Card css={{ w: '100%' }}>
                <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={12}
                      weight='bold'
                      transform='uppercase'
                      color='#ffffffAA'
                    >
                      Plant a tree
                    </Text>
                    <Text h4 color='white'>
                      Contribute to the planet
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Image
                  src='https://nextui.org/images/card-example-3.jpeg'
                  width='100%'
                  height={340}
                  objectFit='cover'
                  alt='Card image background'
                />
              </Card>
            </div>

            <div onClick={open} className='hover:cursor-pointer'>
              <Card css={{ w: '100%' }}>
                <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={12}
                      weight='bold'
                      transform='uppercase'
                      color='#ffffffAA'
                    >
                      Plant a tree
                    </Text>
                    <Text h4 color='white'>
                      Contribute to the planet
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Image
                  src='https://nextui.org/images/card-example-3.jpeg'
                  width='100%'
                  height={340}
                  objectFit='cover'
                  alt='Card image background'
                />
              </Card>
            </div>

            <div onClick={open} className='hover:cursor-pointer'>
              <Card css={{ w: '100%' }}>
                <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={12}
                      weight='bold'
                      transform='uppercase'
                      color='#ffffffAA'
                    >
                      Plant a tree
                    </Text>
                    <Text h4 color='white'>
                      Contribute to the planet
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Image
                  src='https://nextui.org/images/card-example-3.jpeg'
                  width='100%'
                  height={340}
                  objectFit='cover'
                  alt='Card image background'
                />
              </Card>
            </div>
          </div>

          <div className='w-full max-w-lg h-full max-h-lg'>
            <Modal
              closeButton
              blur
              aria-labelledby='modal-title'
              open={cardOpen}
              onClose={closeCard}
              width='60%'
            >
              <Modal.Body>
                <div className='w-full h-full flex flex-row'>
                  <div className='w-[60%] border-2 flex flex-col pt-2'></div>
                  <div className='w-[40%] border-2'></div>
                </div>
              </Modal.Body>
            </Modal>
          </div>

          <div className='w-full max-w-lg h-full max-h-lg'>
            <Modal
              closeButton
              blur
              aria-labelledby='modal-title'
              open={visible}
              onClose={closeHandler}
              width='100%'
            >
              <Modal.Body>
                <div className='w-full h-full flex flex-row'>
                  <div className='w-[25%] border-2 flex flex-col pt-2'>
                    <div className='w-full p-3 hover:font-bold'>
                      Edit Profile
                    </div>
                    <div className='w-full p-3 hover:font-bold'>
                      Change Password
                    </div>
                  </div>
                  <div className='w-[75%] border-2'></div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeform;
