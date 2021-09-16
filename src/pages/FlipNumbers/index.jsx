import React, { useState } from 'react';
import FlipNumber from '@/common/components/FlipNumber';
import '@/assets/style/common.scss';

export default () => {
  const [num, setNum] = useState(10);
  const [num2, setNum2] = useState(10);
  return (
    <div>
      <FlipNumber number={num} radix={3} omitDecimals={false} itemStyle={{ color: 'red', fontSize: '50px'}} />

      <div className="add noselect" onClick={() => setNum(num+1)}>add1</div>


      <FlipNumber 
        number={num2} 
        // 不好讲 点击add2看看 跟add1对比下
        updateRecycle={true} 
        radix={3}
        // 是否省略 ${radix} 位小数后面的数字
        omitDecimals={false}
        // 每个字符都会使用这个样式 
        itemStyle={{ color: 'red', fontSize: '50px'}}
      />
      <div className="add noselect" onClick={() => setNum2(num2+1)}>add2</div>
      
    </div>
  )
}