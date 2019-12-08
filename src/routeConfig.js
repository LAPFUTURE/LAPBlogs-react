// import React from 'react';
import Index from './Page/Index';
import Main from './Page/Main';
import Login from './Page/Login';

const routeConfig = [
    {
        path: '/',
        component: Index,
        exact: true,
    },
    {
        path: '/login',
        exact: true,
        component: Login,
    },
    {
        path: '/main',
        component: Main,
    },
];
export default routeConfig;
