import React, { useEffect } from 'react';
import { con, demo1, wrap, red } from './index.module.scss';

export default () => {
  useEffect(() => {
    console.log('didmount');
  }, []);

  return (
    <div className={wrap, red}>
      <h6>在当前目录下 运行 yarn sass:watch</h6>
      <div className={con}>
        <div className={demo1} />
      </div>
      <div className={demo1} >123</div>
    </div>
  //   <div className="wrap">
  //   <h6>在当前目录下 运行 yarn sass:watch</h6>
  //   <div className="con">
  //     <div className="demo1" />
  //   </div>
  //   <div className="demo1" >123</div>
  // </div>
  );
};
