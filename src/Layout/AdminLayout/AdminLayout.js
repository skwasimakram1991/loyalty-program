/** @format */

import React from 'react';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Footer from '../../Component/Footer/Footer';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <>
      <section className='dash-layout'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-2 col-md-0 p-0'>
              <Sidebar></Sidebar>
            </div>
            <div className='col-lg-10 col-md-12 p-0'>
              <Header></Header>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default AdminLayout;
