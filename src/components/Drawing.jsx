import SignatureCanvas from 'react-signature-canvas';

import { useState, useRef } from 'react';
import DropdownCom from './Utils/Dropdown';
import useWindowDimensions from '../hooks/useWindowDimention';
import { base64URLtoFile } from '../libs/FileConverter';
import { fetchApi } from '../helpers/fetchApi';
import { Loading } from '@nextui-org/react';
import PropType from 'prop-types';

const Drawing = ({ assignTo, css }) => {
  const [color, setColor] = useState('gray');
  const boardRef = useRef(null);
  const [dimension] = useWindowDimensions();
  const [btnLoading, setBtnLoading] = useState(false);

  const onClearBoard = () => {
    boardRef.current.clear();
  };

  const onPublish = async () => {
    setBtnLoading(true);
    if (boardRef.current.isEmpty()) throw new Error('Please write diary'); //TODO : handle isEmpty alert

    const diaryAsB64 = boardRef.current.toDataURL('png');
    const imgFile = base64URLtoFile(diaryAsB64, 'diaryImage.png');

    console.log(imgFile);

    const formData = new FormData();
    formData.append('file', imgFile);
    formData.append('assignTo', assignTo);

    try {
      const response = await fetchApi(
        'post',
        'api/v1/diaries/',
        true,
        formData
      );

      console.log(response);

      setBtnLoading(false);
      onClearBoard();
    } catch (e) {
      console.error(e);
      setBtnLoading(false);
      return;
    }

    // console.log(base64URLtoFile(diaryAsB64, 'test'));
  };

  return (
    <>
      <div>
        <div className='flex flex-col mb-2'>
          <DropdownCom setColor={setColor} />
          <button
            className='bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-xl ml-2 w-20 mt-4'
            onClick={onClearBoard}
          >
            clear
          </button>
        </div>
        <div
          className={`bg-[url('/src/assets/gridLine.png')] bg-cover bg-blend-overlay ${{
            css,
          }}`}
        >
          <SignatureCanvas
            ref={boardRef}
            throttle={5}
            penColor={color.toLowerCase()}
            canvasProps={{
              width: dimension.width <= 767 ? dimension.width - 50 : 520,
              height: 400,
              className: 'sigCanvas',
            }}
          />
        </div>
        <div className='flex justify-end items-center mb-2'>
          <button
            className='bg-sky-400 hover:bg-sky-500 text-white px-3 py-[0.4rem] rounded-xl ml-2 w-20 mt-2 transition-all hover:-translate-y-1'
            onClick={onPublish}
          >
            {btnLoading ? <Loading /> : 'Publish'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Drawing;

Drawing.PropType = {
  assignTo: PropType.string.isRequired,
  css: PropType.string,
};
