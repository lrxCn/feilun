import React , { useEffect } from 'react';
import { con } from './index.module.scss';

export default () => {

  useEffect(() => {
    console.log('didmount');
  }, []);

  return (
    <div className={con}>123</div>
  )
}