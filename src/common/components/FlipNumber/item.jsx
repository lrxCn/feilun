import React, { useState, useEffect, useRef } from 'react';
import { rollNumberContent, rollNumberCellTransition, rollNumberCellHidden }  from './item.module.scss';
import cx from 'classnames';

export default ({ value = 0, itemStyle, updateRecycle } = {}) => {
  const firstRender = useRef(true);
  const [{
    transition,
    transformValue,
    prevValue,
  }, setState] = useState({
    transition: false,
    transformValue: 0,
    prevValue: 0,
  });

  useEffect(() => {
    setState(prev => ({
      ...prev,
      transition: true,
      transformValue: -1 * 100 * (value + (value < prevValue ? 10 : 0)) - (updateRecycle || firstRender.current ? 1e3 : 0),
    }));
  }, [value]);
  
  useEffect(() => firstRender.current = false,[])

  const handleTransitionEnd = () => {
    setState(prev => ({
      ...prev,
      transition: false,
      transformValue: -1 * 100 * value,
      prevValue: value,
    }));
  };

  return (
    <div className={rollNumberContent} onTransitionEnd={handleTransitionEnd}>
      {[...Array(10).keys(), ...Array(10).keys()].map((i, key) => (
        <span
          key={`${i }_${ key}`}
          className={cx(
            transition ? rollNumberCellTransition : rollNumberCellHidden
          )}
          style={{ ...itemStyle, transform: `translateY(${transformValue}%)` }}
        >
          {i}
        </span>
      ))}
    </div>
  );
};
