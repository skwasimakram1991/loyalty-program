/** @format */

import React, { useState } from 'react';
import ToggleOn from '../img/toggleOn.svg';
import ToggleOff from '../img/toggleOff.svg';
function ToggleButton() {
  const [toggleOn, isToggleOn] = useState(false); //this toggleOn save the state
  return (
    <>
      <button
        class='toggle' //false         true
        onClick={() => isToggleOn((prevState) => !prevState)}>
        {toggleOn ? (
          <img src={ToggleOff} alt='' />
        ) : (
          <img src={ToggleOn} alt='' />
        )}
      </button>
    </>
  );
}

export default ToggleButton;
// toggle button export
