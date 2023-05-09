/** @format */

import React from 'react';

function ColorCode({ color }) {
  return (
    <>
      <span style={{ backgroundColor: `${color}` }}></span>
      {color}
    </>
  );
}

export default ColorCode;
