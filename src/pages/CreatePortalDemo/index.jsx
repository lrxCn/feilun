import React , { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Portal from 'rc-util/lib/PortalWrapper';
import { con, sign } from './index.module.scss';


const Son = ({ rootEl }) => (
  <Portal visible={true} getContainer={rootEl}>
    {() => (
      <div className={sign}>123</div>
    )}
  </Portal>
)


export default () => {
  const rootEl = useRef();
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log('didmount');
  }, []);

  return (
    <div ref={rootEl} className={con}>
      {
        show && (
          <div className={con}>
            <Son rootEl={rootEl} />
          </div>
        )
      }
      <button onClick={() => setShow(false)}>close</button>
    </div>
  )
}