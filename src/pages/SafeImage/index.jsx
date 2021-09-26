import React from 'react';
import SafeImage from "@/common/components/SafeImage";
import {square100, outline} from '@/assets/style/common.module.scss';

const RIGHT_SRC = {
  HAND: 'https://img.icons8.com/glyph-neue/2x/easy.png',
  SMILE: 'https://www.easyicon.cc/icon/tabler-icons/node_modules/@tabler/icons/icons/mood-smile.svg'
}

export default () => {
  return (
    <div>
      <h6>可以当做正常的img使用</h6>
      <SafeImage src={RIGHT_SRC.HAND} className={square100, outline} alt="hand" />
      <hr />

      <h6>也可以不传src 只穿srclist</h6>
      <SafeImage src={[RIGHT_SRC.HAND, RIGHT_SRC.SMILE]} className={square100} />
      <hr />

      <h6>当srclist第一个地址报错的时候，会尝试使用第二个</h6>
      <SafeImage src={[`mass${RIGHT_SRC.HAND}`, RIGHT_SRC.SMILE]} className={square100} />
      <hr />

      <h6>src 和 srclist 可以一起使用，src优先级高于srcList</h6>
      <SafeImage src={[RIGHT_SRC.HAND, RIGHT_SRC.SMILE]} className={square100} />
      <hr />
    </div>
  )
}