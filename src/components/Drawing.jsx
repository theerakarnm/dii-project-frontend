import SignatureCanvas from 'react-signature-canvas';

import { useState, useMemo, useRef } from 'react';
import DropdownCom from './Utils/Dropdown';

const Drawing = ({ css }) => {
  const [color, setColor] = useState(new Set(['black']));
  const boardRef = useRef(null);

  const selectedColor = useMemo(
    () => Array.from(color).join(', ').replaceAll('_', ' '),
    [color]
  );

  const onClearBoard = () => {
    boardRef.current.clear();
  };

  console.log({ selectedColor });

  return (
    <>
      <div>
        <div className='flex mb-2'>
          <DropdownCom setColor={setColor} />
          <button
            className='bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-xl ml-2'
            onClick={onClearBoard}
          >
            clear
          </button>
        </div>
        <div className={`bg-white ${{ css }}`}>
          <SignatureCanvas
            ref={boardRef}
            throttle={5}
            penColor={selectedColor.toLowerCase()}
            canvasProps={{ width: 500, height: 400, className: 'sigCanvas' }}
          />
        </div>
      </div>
    </>
  );
};

export default Drawing;
