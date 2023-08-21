/** @format */

import React, { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function SuccessModal({ title, loader = true, duration }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!loader && !duration) {
      setVisible(true); // Keep the modal visible when loader is false and no duration is provided
    }
  }, [loader, duration]);

  useEffect(() => {
    if (duration && visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration * 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [duration, visible]);

  if (!visible) {
    return null; // Return null to prevent rendering the modal
  }

  return (
    <>
      <div className='success-modal show' id='success-modal'>
        {loader && (
          <div className='loyalty-loader'>
            <div className='dot dot1'></div>
            <div className='dot dot2'></div>
            <div className='dot dot3'></div>
          </div>
        )}

        <h3>{title}</h3>
        {/* {message && <p>{message}</p>} */}
      </div>
    </>
  );
}

export default SuccessModal;
