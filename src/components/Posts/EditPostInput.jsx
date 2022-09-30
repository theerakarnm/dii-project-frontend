import { Textarea } from '@nextui-org/react';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { fetchApi } from '../../helpers/fetchApi';
import contextStore from '../../context/contextStore';
import FeedStore from '../../context/contextStore_feed';
import PropType from 'prop-types';
const EditPostInput = ({ setter, initValue }) => {
  const [values, setValues] = useState(initValue);
  const postId = useContext(contextStore);
  const { setAlertValue } = useContext(FeedStore);

  const onType = (e) => {
    setValues(e.target.value);
  };

  const onDiscard = () => {
    setter.setIsAbleEdit(false);
  };

  const onConfirm = async () => {
    setter.setIsAbleEdit(false);
    setter.setEntireLoading(true);

    try {
      const result = await fetchApi('put', `api/v1/posts/${postId}`, true, {
        content: values,
      });

      setter.setEntireLoading(false);
      setter.setContent(values);
    } catch (e) {
      setAlertValue({
        isShow: true,
        color: 'red',
        context: 'Comment failed to update',
      });
    }
  };

  return (
    <div className='flex flex-col justify-end w-full pr-3'>
      <Textarea
        css={{
          width: '100%',
        }}
        placeholder='edit here'
        w
        value={values}
        onChange={onType}
        rows={4}
      />
      <div className='flex justify-end'>
        <button
          onClick={onDiscard}
          className='bg-red-400 text-white py-1 px-3 rounded-lg ml-1 mt-2 hover:bg-red-500'
        >
          Discard
        </button>
        <button
          onClick={onConfirm}
          className='bg-sky-400 text-white py-1 px-3 rounded-lg ml-1 mt-2 hover:bg-sky-500'
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default EditPostInput;

EditPostInput.PropType = {
  setter: PropType.object,
  initValue: PropType.string,
};
