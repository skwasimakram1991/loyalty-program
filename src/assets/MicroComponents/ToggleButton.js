/** @format */

import React, { useState } from 'react';
import ToggleOn from '../images/toggleOn.svg';
import ToggleOff from '../images/toggleOff.svg';
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
