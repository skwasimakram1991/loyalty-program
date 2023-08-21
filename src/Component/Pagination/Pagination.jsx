/** @format */

import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { useFetchPartnersDataQuery } from '../../store/api/partnersApi';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatePage } from '../../store/slices/partnerSlice';

function Pagination({ currentPage, totalPage }) {
  console.log(currentPage, totalPage);
  const dispatch = useDispatch();
  return (
    <>
      <ul className='page-nation'>
        <li>
          <button>
            <BsChevronLeft />
          </button>
        </li>
        {Array.from({ length: totalPage }, (_, index) => (
          <li
            key={index + 1}
            className={`${currentPage === index + 1 ? 'active' : ''}`}>
            <button
              onClick={() => {
                dispatch(updatePage(index + 1));
                console.log(index + 1);
              }}>
              {index + 1}
            </button>
          </li>
        ))}
        {/* <li>
          <a href='#'>
            <BsChevronLeft />
          </a>
        </li>
        <li className='active'>
          <a href='#'>1</a>
        </li>
        <li>
          <a href='#'>2</a>
        </li>
        <li>
          <a href='#'>3</a>
        </li>
        <li>
          <a href='#'>4</a>
        </li>
        <li>
          <a href='#'>5</a>
        </li>
        <li>
          <a href='#'>
            <BsChevronRight />
          </a>
        </li> */}
        <li>
          <button>
            <BsChevronRight />
          </button>
        </li>
      </ul>
    </>
  );
}

export default Pagination;
