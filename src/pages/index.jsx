import React, { useEffect, useState } from 'react';
import ROUTES from '@/config/routes';
import useTitle from '@/common/hooks/useTitle.js';
import './index.scss';

export default () => {
  const [cur, setCur] = useState(0);
  const { Component, title } = ROUTES[cur];
  useTitle(title);

  return (
    <div className="con">
      <div className="route-con">
        {ROUTES.map(({ title, route }, index) => (
          <div onClick={() => setCur(index)} key={route} className="route">{title}</div>
        ))}
      </div>
      <Component />
    </div>
  );
  
}