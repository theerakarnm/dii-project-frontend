import SignatureCanvas from 'react-signature-canvas';

import { useState, useMemo, useRef } from 'react';
import DropdownCom from './Utils/Dropdown';

const Drawing = ({ css }) => {
  const [color, setColor] = useState('gray');
  const boardRef = useRef(null);

  const onClearBoard = () => {
    boardRef.current.clear();
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
        <div className={`bg-slate-50 ${{ css }}`}>
          <SignatureCanvas
            ref={boardRef}
            throttle={5}
            penColor={color.toLowerCase()}
            canvasProps={{ width: 500, height: 400, className: 'sigCanvas' }}
          />
        </div>
      </div>
    </>
  );
};

export default Drawing;
