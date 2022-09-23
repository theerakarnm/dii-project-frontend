import React from 'react';
import { Modal, useModal, Button, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from '../../libs/getterSetterCookie';

import Comment from './Comment';

const AllCommentModel = ({ bindings, setVisible, loading }) => {
  const cookieData = getCookie('login_data');

  const [comment, setComment] = useState([]);

  return (
    <div>
      <Modal
        scroll
        width='600px'
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
        {...bindings}
      >
        <Modal.Header>
          <Text id='modal-title' size={18}>
            All comment
          </Text>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-loader animate-spin'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              stroke-width='1'
              stroke='#6f32be'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <line x1='12' y1='6' x2='12' y2='3' />
              <line x1='16.25' y1='7.75' x2='18.4' y2='5.6' />
              <line x1='18' y1='12' x2='21' y2='12' />
              <line x1='16.25' y1='16.25' x2='18.4' y2='18.4' />
              <line x1='12' y1='18' x2='12' y2='21' />
              <line x1='7.75' y1='16.25' x2='5.6' y2='18.4' />
              <line x1='6' y1='12' x2='3' y2='12' />
              <line x1='7.75' y1='7.75' x2='5.6' y2='5.6' />
            </svg>
          ) : (
            comment.map((cmt) => <Comment comment={cmt} />)
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color='error' onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button auto onClick={() => setVisible(false)}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AllCommentModel;