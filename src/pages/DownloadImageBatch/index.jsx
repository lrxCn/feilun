import React, { useEffect } from 'react';
import { downloadWrapper } from '../../common/utils/download';
import { downloadBtn, download } from './index.module.scss';

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
    <div className={download}>
      <div className={downloadBtn} onClick={downloadTotal1}>down1</div>
      <div className={downloadBtn} onClick={downloadTotal2}>down2</div>
    </div>
  )
}