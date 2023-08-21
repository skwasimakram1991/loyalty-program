/** @format */

import React from 'react';

import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

function Layout({
  sectionTitle = 'section Title',
  children,
  partnerLink = '',
}) {
  return (
    <section className='partner-facilities-page main-page-size'>
      <div className='container-fluid'>
        <div className='row align-items-center title-sec'>
          <div className='col-lg-6'>
            <h2>{sectionTitle}</h2>
          </div>
          <div className='col-lg-6 text-end'>
            <Link to={partnerLink} className='title-btn'>
              Add Partner
            </Link>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>{children}</div>
        </div>
      </div>
    </section>
  );
}

export default Layout;
