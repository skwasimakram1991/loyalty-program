/** @format */

import React from 'react';

function TableWrapper({ children }) {
  return (
    <>
      <div className='table-wrap table-responsive'>
        <table className='table'>{children}</table>
      </div>
    </>
  );
}

export default TableWrapper;
