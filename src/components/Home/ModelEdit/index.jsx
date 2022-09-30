import { useState, useRef, useContext } from 'react';
import { Modal, User } from '@nextui-org/react';

import { getCookie } from '../../../libs/getterSetterCookie';
import Edit from './Edit';
import ChangePass from './ChangePass';

const ModelEdit = ({ data }) => {
  const { visible, closeHandler } = data;
  const cookie = getCookie('login_data');

  const [selectShow, setSelectShow] = useState(0); // 0 <- normal edit, 1 <- change password

  return (
    <div className='w-full max-w-lg h-full max-h-lg'>
      <Modal
        closeButton
        blur
        className='md:max-w-[80rem] mx-auto'
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}
        width='100%'
      >
        <Modal.Body>
          <div className='w-full h-full flex flex-col lg:flex-row py-3'>
            <div className='border-[1px] flex flex-col pt-2 rounded-lg w-full lg:w-[25%] lg:rounded-tl-lg lg:rounded-bl-lg px-2'>
              <div className='w-full hover:font-bold mb-2 mt-2'>
                <button
                  onClick={() => setSelectShow(0)}
                  className={`hover:bg-gray-100 ${
                    selectShow === 0 ? 'bg-gray-50' : ''
                  } transition-all px-4 text-left py-2 w-full rounded-lg`}
                >
                  Edit Profile
                </button>
              </div>
              <div className='w-full hover:font-bold mb-2'>
                <button
                  onClick={() => setSelectShow(1)}
                  className={`hover:bg-gray-100 ${
                    selectShow === 1 ? 'bg-gray-50' : ''
                  } transition-all px-4 text-left py-2 w-full rounded-lg`}
                >
                  Change Password
                </button>
              </div>
            </div>
            <div className='border-[1px] w-full lg:w-[75%]  rounded-lg lg:rounded-tr-lg lg:rounded-br-lg'>
              {selectShow === 0 ? (
                <Edit closeHandler={closeHandler} />
              ) : (
                <ChangePass closeHandler={closeHandler} />
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModelEdit;
