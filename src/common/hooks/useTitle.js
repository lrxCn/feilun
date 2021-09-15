import { useEffect, useRef } from 'react';
import { NOOP, UNDEFINED } from '@/common/utils/constants';

export default typeof document !== UNDEFINED ? (
  title => {

    const prevTitleRef = useRef(document.title);
  
    if (document.title !== title) document.title = title;
  
    useEffect(() => () => document.title = prevTitleRef.current, []);
  }
) : NOOP;