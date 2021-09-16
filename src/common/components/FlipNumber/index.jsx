import React, { useState, useEffect } from 'react';
import RollNumberItem from './item';
import { transNumber } from './utils';
import './index.scss';

export default ({
  number = 0,
  radix = 0,
  omitDecimals = true,
  updateRecycle = false,
  itemStyle = {}
}) => {
  const [numberArr, setNumberArr] = useState(transNumber(0, { radix, omitDecimals }));

  useEffect(() => {
    setNumberArr(transNumber(number, { radix, omitDecimals }));
  }, [number]);

  const { fontSize, lineHeight, height} = itemStyle || {};

  return (
    <div className="roll-number" style={{ height: height || lineHeight || fontSize || '1rem' }}>
      {numberArr.map(item => (/^\d$/.test(item.value) ? (
          <RollNumberItem
            updateRecycle={updateRecycle}
            itemStyle={itemStyle}
            key={item.key}
            kname={item.key}
            value={parseInt(item.value, 10)}
          />
        ) : (
          <span key={item.key} style={itemStyle}>
            {item.value}
          </span>
        ))
      )}
    </div>
  );
};
