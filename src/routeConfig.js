// import React from 'react';
import Index from './Page/Index';
import Main from './Page/Main';
import Login from './Page/Login';
import Write from './Page/Write';

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
    {
        path: '/write',
        component: Write,
    },
];
export default routeConfig;
