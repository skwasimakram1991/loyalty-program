/** @format */

import React from 'react';

function TableWrapper({ children }) {
  return (
    <>
      <div className='table-wrap table-responsive'>{children}</div>
    </>
  );
}

export default TableWrapper;
