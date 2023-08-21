/** @format */

import React from 'react';
import qrcodeimg from '../../assets/images/qr-code.svg';
import downloadimg from '../../assets/images/download.svg';
import editimg from '../../assets/images/edit-icon.svg';
import { Link } from 'react-router-dom';
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
    title: 'Adidas',
    email: 'Info@adidas.com',
    phone: '(907) 555-0101',
    subscription: 'Business Plus',
  },
  {
    id: 3,
    title: 'Adidas',
    email: 'Info@adidas.com',
    phone: '(907) 555-0101',
    subscription: 'Business Plus',
  },
  {
    id: 4,
    title: 'Adidas',
    email: 'Info@adidas.com',
    phone: '(907) 555-0101',
    subscription: 'Business Plus',
  },
  {
    id: 5,
    title: 'Adidas',
    email: 'Info@adidas.com',
    phone: '(907) 555-0101',
    subscription: 'Business Plus',
  },
  {
    id: 6,
    title: 'Adidas',
    email: 'Info@adidas.com',
    phone: '(907) 555-0101',
    subscription: 'Business Plus',
  },
  {
    id: 7,
    title: 'Adidas',
    email: 'Info@adidas.com',
    phone: '(907) 555-0101',
    subscription: 'Business Plus',
  },
];
function Table({ tableHead = tableHeadData, TableData = tableBodyData }) {
  //   console.log(tableHead);
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            {tableHead.map(({ id, title }) => (
              <th key={id}> {title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TableData.map((tbody) => (
            <TableRow key={tbody.id} data={tbody} />
          ))}
        </tbody>
      </table>
    </>
  );
}

function TableRow({ data }) {
  if (!data) {
    return null;
  }
  const { qr_code, image, sponsor_name, email, phone, subscription_id, id } =
    data;
  if (
    !qr_code ||
    !image ||
    !sponsor_name ||
    !email ||
    !phone ||
    !subscription_id ||
    !id
  ) {
    return null;
  }

  const qrImg = `https://loyality-program.onrender.com/${qr_code
    .split('/')
    .slice(1)
    .join('/')}?timestamp=${Date.now()}`;

  const profileImg = `https://loyality-program.onrender.com/${image
    .split('/')
    .slice(1)
    .join('/')}`;
  console.log(qr_code);
  const handleDownload = () => {
    fetch(qrImg)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'qrImage.jpg';
        anchor.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error downloading image:', error);
      });
  };
  return (
    <>
      <tr>
        <td className='prof'>
          <img src={image} alt='Profile' />
          {sponsor_name}
        </td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{subscription_id.plan_name}</td>
        <td>
          <img src={qrImg} alt='QR Code' />
          {console.log(qrImg)}
        </td>
        <td>
          <button className='down-img' onClick={handleDownload}>
            <img src={downloadimg} alt='Download' />
          </button>
        </td>
        <td>
          <Link to={`/partner/editpartner/${id}`} className='edit-img'>
            <img src={editimg} alt='Edit' />
          </Link>
        </td>
      </tr>
    </>
  );
}

export default Table;
