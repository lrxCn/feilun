import React , { useRef, useState } from 'react';

export default (props = {}) => {
  const srcIndexRef = useRef(0);
  const [src, setSrc] = useState(props.src || props.srclist?.[srcIndexRef.current++ || 0]);

  const onError = () => {
    const _src = props.srclist[srcIndexRef.current++ || 0];
    _src && setSrc(_src);
  };

  return <img {...props} src={src} onError={onError} />;
};