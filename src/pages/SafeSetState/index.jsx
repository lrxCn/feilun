import React, { useState } from 'react';
import Child from './component/Child';
import ChildSafeState from './component/ChildSafeState';
import '@/assets/style/common.scss';

export default () => {
  const [visChild1, setVisChild1] = useState(true);
  const [visChild2, setVisChild2] = useState(true);
  return (
    <div>
      <h6>当子组件卸载发生在setState之前，控制台就会报一个warning: Can't perform a React state update on an unmounted component.</h6>
      {visChild1 && <Child killMyself={() => setVisChild1(false)} />}
      <hr />


      <h6>如果使用useSafeState就不会有这样的问题</h6>
      {visChild2 && <ChildSafeState killMyself={() => setVisChild2(false)} />}
      <hr />

    </div>
  )
}