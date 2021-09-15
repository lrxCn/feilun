import React, { useEffect, useRef, useState } from 'react';
import ROUTES from '@/config/routes';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { arr2json } from '@/common/utils/index.js';
import './index.scss';

export default () => {
  const routeJSON = useRef(arr2json(ROUTES, 'route'));

  const setTitle = () => {
    const { route, title = route.slice(1) } = routeJSON.current?.[location.hash.slice(1)];
    document.title = title;
  };

  useEffect(() => {
    setTitle();
    window.onhashchange = setTitle;

    return () => {
      window.removeEventListener('hashchange');
    };
  }, []);

  return (
    <div className="con">
      <Router>
        <div>
          <nav>
            <ul>
              {ROUTES.map(({ title, route }) => (
                <li key={route}>
                  <Link to={route}>{title || route.slice(1)}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Switch>
            {ROUTES.map(({ route, Component }) => (
              <Route key={route} path={route} component={Component} />
            ))}
            <Redirect path="/" to={ROUTES[0].route} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
