import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routeConfig from './routeConfig';

ReactDOM.render(
    <Router>{renderRoutes(routeConfig)}</Router>,
    document.getElementById('root')
);
