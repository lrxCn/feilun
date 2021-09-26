import React , { useRef, useState } from 'react';

export default (props = {}) => {
  const srcIndexRef = useRef(0);
  const [src, setSrc] = useState(Array.isArray(props.src) ?  props.src?.[srcIndexRef.current++ || 0] : props.src);

  const onError = () => {
    if(Array.isArray(props.src)){
      const _src = props.src[srcIndexRef.current++ || 0];
      _src && setSrc(_src);
    }
  };

  return <img {...props} src={src} onError={onError} />;
};