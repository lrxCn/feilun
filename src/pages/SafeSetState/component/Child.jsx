import React, { useEffect, useState } from 'react';
import { NOOP } from '@/common/utils/constants';
import { mockAjax } from '@/common/utils';

export default ({
  killMyself = NOOP
}) => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    mockAjax('response', 1000).then(setValue);
    setTimeout(killMyself, 500);
  }, []);

  return (
    <div>child: {value}</div>
  )
}