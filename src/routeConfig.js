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
        // childRoutes: [
        //     {
        //         path: 'path1',
        //         component: () => <h1>path1</h1>,
        //     },
        //     {
        //         path: 'path2',
        //         component: () => <h1>path1</h1>,
        //     },
        // ],
    },
];
export default routeConfig;
