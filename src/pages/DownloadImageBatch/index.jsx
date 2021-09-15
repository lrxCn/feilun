import React from 'react';
import { downloadWrapper } from '../../common/utils/download';
import './index.scss';

const RIGHT_SRC = {
  HAND: '/2.jpeg',
  SMILE: '/3.jpeg'
}

export default () => {

  const downloadTotal1 = () => {
    downloadWrapper(RIGHT_SRC.HAND)
  };

  const downloadTotal2 = () => {
    downloadWrapper([RIGHT_SRC.HAND, RIGHT_SRC.SMILE])
  };

  return (
    <div className='con-download'>
      <div className='con-download-btn' onClick={downloadTotal1}>down1</div>
      <div className='con-download-btn' onClick={downloadTotal2}>down2</div>
    </div>
  )
}