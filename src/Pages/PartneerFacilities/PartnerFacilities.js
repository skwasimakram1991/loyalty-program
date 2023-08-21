/** @format */

import partnerimg1 from '../../assets/images/partner-img1.png';
import partnerimg2 from '../../assets/images/partner-img2.png';
import partnerimg3 from '../../assets/images/partner-img3.png';
import partnerimg4 from '../../assets/images/partner-img4.png';
import partnerimg5 from '../../assets/images/partner-img5.png';
import partnerimg6 from '../../assets/images/partner-img6.png';

import React, { useState } from 'react';

import Layout from '../../Component/SectionLayout/Layout';
import TableWrapper from '../../Component/TableWrapper/TableWrapper';
import Table from '../../Component/Table/Table';
import { useFetchPartnersDataQuery } from '../../store/api/partnersApi';
import SuccessModal from '../../Component/notify/SuccessModal';
import Pagination from '../../Component/Pagination/Pagination';
import { useSelector } from 'react-redux';
function PartnerFacilities() {
  const currPage = useSelector((state) => state.partner.currPage);
  const { data, isLoading, isFetching, error, refetch } =
    useFetchPartnersDataQuery(currPage);

  console.log(useFetchPartnersDataQuery(currPage));
  const tableHeadData = [
    { id: 1, title: 'partner name' },
    { id: 2, title: 'Email address' },
    { id: 3, title: 'Phone no' },
    { id: 4, title: 'subscription' },
    { id: 5, title: 'QR Code' },
    { id: 6, title: 'Download QR' },
    { id: 7, title: 'Edit' },
  ];
  const tableBodyData = [
    {
      id: 1,
      title: 'Adidas',
      email: 'Info@adidas.com',
      phone: '(907) 555-0101',
      subscription: 'Business Plus',
    },
    {
      id: 2,
      title: 'Gillette',
      email: 'Info@adidas.com',
      phone: '(907) 555-0101',
      subscription: 'Business Plus',
    },
    {
      id: 3,
      title: 'McDonalds',
      email: 'Info@adidas.com',
      phone: '(907) 555-0101',
      subscription: 'Business Plus',
    },
    {
      id: 4,
      title: 'Starbucks',
      email: 'Info@adidas.com',
      phone: '(907) 555-0101',
      subscription: 'Business Plus',
    },
    {
      id: 5,
      title: 'Mitsubishi',
      email: 'Info@adidas.com',
      phone: '(907) 555-0101',
      subscription: 'Business Plus',
    },
    {
      id: 6,
      title: 'MasterCard',
      email: 'Info@adidas.com',
      phone: '(907) 555-0101',
      subscription: 'Business Plus',
    },
    {
      id: 7,
      title: 'Louis Vuitton',
      email: 'Info@adidas.com',
      phone: '(907) 555-0101',
      subscription: 'Business Plus',
    },
  ];

  return (
    <>
      {isLoading && <SuccessModal title={'Loading'} loader={false} />}
      <Layout
        sectionTitle='Partner Facilities'
        partnerLink='/partner/addpartner'>
        {data?.data && (
          <>
            <TableWrapper>
              <Table tableHead={tableHeadData} TableData={data?.data}></Table>
            </TableWrapper>
            <Pagination
              totalPage={data?.totalPages}
              currentPage={data?.currentPage}
            />
            {isFetching && <SuccessModal title={'Updating'} loader={false} />}
          </>
        )}
      </Layout>
      {error && <h2>error</h2>}
    </>
  );
}

export default PartnerFacilities;
