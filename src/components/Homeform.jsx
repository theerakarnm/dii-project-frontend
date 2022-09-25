import React from 'react';
import {
  Avatar,
  Textarea,
  Text,
  Button,
  Modal,
  Card,
  Col,
  Input
} from '@nextui-org/react';
import { getCookie } from '../libs/getterSetterCookie';


const Homeform = () => {
  const cookie = getCookie('login_data');


  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  const [cardImgOpen, setCardImgOpen] = React.useState(false);
  const openImgCard = () => setCardImgOpen(true);
  const closeCardImg = () => {
    setCardImgOpen(false);
  };

  const [cardTextOpen, setCardTextOpen] = React.useState(false);
  const openTextCard = () => setCardTextOpen(true);
  const closeCardText = () => {
    setCardTextOpen(false);
  };

  const [editOpen, setEditOpen] = React.useState(false);
  const openEdit = () => setEditOpen(true);
  const closeEdit = () => {
    setEditOpen(false);
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
                  {`${cookie.firstName} ${cookie.lastName}`}
                </Text>
                <Text
                  h1
                  className='md:text-[1.3rem] text-[0.8rem]'
                  css={{
                    textGradient: '45deg, $purple600 -20%, $pink600 100%',
                  }}
                  weight='bold'
                >
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

          <div className=' w-full h-[2px] bg-gradient-to-r p-[1px] from-[#7928ca] to-[#ff0080]'></div>

          {/* card home page */}
          <div className='w-full  flex justify-center md:pt-5 md:pb-2 md:my-2 '>
            <div className='w-[25%] flex justify-center items-center'>

              <div className='w-full flex justify-center items-center opacity-50 hover:opacity-100'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-border-all " width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x={4} y={4} width={16} height={16} rx={2}></rect>
                    <line x1={4} y1={12} x2={20} y2={12}></line>
                    <line x1={12} y1={4} x2={12} y2={20}></line>
                  </svg>
                </div>
                <div className='font-bold mx-1 text-[1.3rem] '>
                  Post
                </div>
              </div>

              <div className='w-full flex justify-center items-center opacity-50 hover:opacity-100'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"></path>
                    <line x1="13" y1="8" x2="15" y2="8"></line>
                    <line x1="13" y1="12" x2="15" y2="12"></line>
                  </svg>
                </div>
                <div className='font-bold mx-1 text-[1.3rem] '>
                  Diary
                </div>

              </div>
            </div>
          </div>



          {/* body */}


          <div className='w-full h-full  grid gap-2  md:grid-rows-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-5 mt-5'>

            <div onClick={openImgCard} className='hover:cursor-pointer row-span-4 '>
              <Card css={{ w: '100%', h: '400px' }}>
                <Card.Body css={{ p: 0 }}>
                  <Text css={{ position: 'absolute', zIndex: 1, top: 5, w: '90%', h: '90%' }}
                    className='text-white pt-2 pl-2 opacity-0 hover:opacity-100'>
                    22/06/2002
                  </Text>
                  <Card.Image
                    src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                    width='100%'
                    height='100%'
                    objectFit='cover'
                    alt='Card example background'
                  />
                </Card.Body>
              </Card>
            </div>

            <div onClick={openTextCard} className='hover:cursor-pointer row-span-2'>
              <div className='flex justify-center items-center w-full h-full p-[1.5px] rounded-lg border bg-gradient-to-r from-[#7928ca] to-[#ff0080]'>
                <Card css={{ w: '100%', h: '200px' }} className='rounded-lg'>
                  <Card.Header>
                    <Text css={{ position: 'absolute', zIndex: 1, top: 10, w: '100%', h: '100%' }}
                      className=' text-black'>
                      22/06/2002
                    </Text>
                  </Card.Header>
                  <Card.Body className='flex justify-center items-center'>
                    <div className='flex justify-center items-center w-full h-full p-[1.5px] rounded-lg border bg-gradient-to-r from-[#7928ca] to-[#ff0080]'>
                      <div className='w-full h-full flex justify-center items-center rounded-md bg-slate-100'>
                        <div className='m-5'>
                          2+2=4
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>



          </div>


          {/* Modal card-IMG post */}
          <div className='w-full h-full max-h-lg'>
            <Modal
              blur
              className='md:max-w-[80rem] flex justify-center items-center md:mx-auto mx-4'
              aria-labelledby='modal-title'
              open={cardImgOpen}
              onClose={closeCardImg}
              width='100%'
            >

              <Modal.Body className='h-full w-full flex justify-center items-center m-0 p-3'>
                <div className='w-full h-full md:max-h-[40rem] max-h-auto flex md:flex-row flex-col'>

                  <div className='md:max-w-[60%] w-full flex flex-col p-3'>
                    <div className='w-full h-full flex justify-center md:min-h-[30rem] min-h-[15rem] items-center bg-black rounded-lg '>
                      <img
                        className='w-full md:max-h-full rounded-lg'
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                      />
                    </div>
                  </div>

                  <div className='md:w-[72rem] p-3 flex flex-col'>
                    <div className='w-full flex justify-between'>
                      <div className='w-full  flex justify-start items-center'>
                        <div className='min-h-lg'>
                          <Avatar
                            src={`${cookie.imageUrl}`}
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
                            {`${cookie.firstName} ${cookie.lastName}`}
                          </Text>
                          <Text
                            h1
                            className='md:text-[0.8rem] text-[0.7rem] font-[Nunito] m-0 p-0' 
                            weight='bold'
                            css={{
                              textGradient: '45deg, $purple600 -20%, $pink600 100%',
                            }}
                          >
                            Time post
                          </Text>
                        </div>
                      </div>
                      <div className='w-full flex justify-end items-center'>
                        <Button auto
                          onClick={openEdit}
                          className='text-purple-600 text-xl'
                        >
                          ...
                        </Button>
                      </div>
                    </div>

                    <div className='w-full h-auto my-2 pt-2 px-2 md:text-[1.2rem] text-[0.9rem]'>
                      content area
                    </div>

                    <div className='w-full h-full border-t px-2 py-3  border-purple-300 bg-slate-100'>
                      comment area
                    </div>


                    <div className='w-full flex'>
                      <div className='w-full'>
                        <input
                          type="text"
                          placeholder='Type your Comment...'
                          className='w-full h-full text-[1.1rem] p-2 border-b-2 border-purple-400 focus:outline-none' />
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

          {/* Modal card-text post */}
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
                        src={`${cookie.imageUrl}`}
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
                        {`${cookie.firstName} ${cookie.lastName}`}
                      </Text>
                    </div>
                  </div>
                  <div className='w-full flex justify-end items-center'>
                    <Button auto
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
                    <div className='m-5'>
                      2+2=4
                    </div>
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer className='w-full flex justify-center items-center  pt-0'>
                <div className='w-[98%] h-full bottom-0 flex justify-center items-center border-2'>
                  comment area
                </div>
                <div className='w-[98%] bottom-0 flex justify-center items-center '>
                  <div className='w-[95%] pl-5'>
                    <input type="text" placeholder='Type your Comment...' className='w-full h-full text-[1.2rem] p-2  border-b-2 border-purple-400 focus:outline-none' />
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

          {/* Modal edit profile */}
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
                  <div className='w-[75%] border-2'>
                    <div className=' w- full h-full flex flex-col justify-center items-center'>
                      <div className=''>

                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>

          {/* Model edit post */}
          <div className=''>
            <Modal
              aria-labelledby='modal-title'
              open={editOpen}
              onClose={closeEdit}
            >
              <Modal.Body
                className='m-0 p-0'>
                <div className='w-full h-full'>
                  <div className='w-full flex justify-center py-2 border-b-[0.5px] border-gray-300'>
                    Edit Post
                  </div>
                  <div className='w-full flex justify-center py-2 border-b-[0.5px] border-gray-300 text-red-700'>
                    Delete Post
                  </div>
                  <div className='w-full flex justify-center py-2 border-b-[0.5px] border-gray-300' onClick={closeEdit}>
                    Cancel
                  </div>
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
