import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div className='sub_div'>
          <main className='main'>
            <p className='title_paragraph'>404</p>
            <div className='sub_block'>
              <div className='first_block'>
                <h1 className='header_title'>Page not found</h1>
                <p className='normal_paragraph'>Please check the URL in the address bar and try again.</p>
              </div>
              <div className='second_block'>
                <Link
                  to='/'
                  className='link_home'>
                  Go back home
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default styled(NotFound)`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: #ffffff;
  min-height: 100vh;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  @media (min-width: 768px) {
    display: grid;
    place-items: center;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .sub_block {
    @media (min-width: 640px) {
      margin-left: 1.5rem;
    }
  }
  .sub_div {
    margin-left: auto;
    margin-right: auto;
    max-width: max-content;
  }
  .main {
    @media (min-width: 640px) {
      display: flex;
    }
  }
  .title_paragraph {
    color: #4f46e5;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.025em;

    @media (min-width: 640px) {
      font-size: 3rem;
      line-height: 1;
    }
  }
  .first_block {
    @media (min-width: 640px) {
      padding-left: 1.5rem;
      border-left-width: 1px;
      border-color: #e5e7eb;
    }
  }
  .header_title {
    color: #111827;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.025em;

    @media (min-width: 640px) {
      font-size: 3rem;
      line-height: 1;
    }
  }
  .normal_paragraph {
    margin-top: 0.25rem;
    color: #6b7280;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .second_block {
    display: flex;
    margin-top: 2.5rem;
    margin-left: 0.75rem;
    margin-left: 0.875rem;

    @media (min-width: 640px) {
      padding-left: 1.5rem;
      border-left-width: 1px;
      border-color: transparent;
    }
  }
  .link_home {
    display: inline-flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #4f46e5;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    align-items: center;
    border-radius: 0.375rem;
    border-width: 1px;
    border-color: transparent;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

    :hover {
      background-color: #4338ca;
    }
  }
`;
