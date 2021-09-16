import React, { useState, useEffect, useRef } from 'react';
import './item.scss';
import cx from 'classnames';
import useSafeState from '@/common/hooks/useSafeState.js';

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
    <div className="roll-number-content" onTransitionEnd={handleTransitionEnd}>
      {[...Array(10).keys(), ...Array(10).keys()].map((i, key) => (
        <span
          key={`${i }_${ key}`}
          className={cx(
            'roll-number-cell',
            transition ? 'roll-number-cell--transition' : 'roll-number-cell--hidden'
          )}
          style={{ ...itemStyle, transform: `translateY(${transformValue}%)` }}
        >
          {i}
        </span>
      ))}
    </div>
  );
};
