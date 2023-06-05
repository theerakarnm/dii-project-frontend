import { Textarea } from '@nextui-org/react';
import React from 'react';
import { useState } from 'react';
import { fetchApi } from '../../helpers/fetchApi';
import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { postAction } from '../../redux/reducers/postReducer';
const EditPostInput = ({ initValue, postId }) => {
  const [values, setValues] = useState(initValue);
  const dispatch = useDispatch();

  const onType = e => {
    setValues(e.target.value);
  };

  const onDiscard = () => {
    dispatch(postAction.setIsAbleEdit(false));
  };

  const onConfirm = async () => {
    dispatch(postAction.setIsAbleEdit(false));
    dispatch(postAction.setEntireLoading(false));

    try {
      const result = await fetchApi('put', `api/v1/posts/${postId}`, true, {
        content: values,
      });

      dispatch(postAction.setEntireLoading(false));
      dispatch(postAction.setContent(values));
    } catch (e) {
      dispatch(
        postAction.setAlertValue({
          isShow: true,
          color: 'red',
          context: 'Comment failed to update',
        })
      );
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
          className='bg-red-400 text-white py-1 px-3 rounded-lg ml-1 mt-2 hover:bg-red-500'>
          Discard
        </button>
        <button
          onClick={onConfirm}
          className='bg-sky-400 text-white py-1 px-3 rounded-lg ml-1 mt-2 hover:bg-sky-500'>
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
