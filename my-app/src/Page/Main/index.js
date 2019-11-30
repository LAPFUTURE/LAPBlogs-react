import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import request from '../../Tools/fetch';
import Nav from '../../Components/Nav';
import Background from '../../Components/Background';

class Index extends Component {
    constructor() {
        super();
        this.state = { quote: {} };
    }
    componentDidMount() {
        this.ask();
    }
    ask() {
        request('http://dwyapi.connectyoume.top/quote/ask_quote').then(res => {
            console.log(res);
        });
    }
    render() {
        return (
            <div>
                <Background />
                <Nav
                    items={[
                        { type: 'home', path: '/' },
                        { type: 'edit', path: '/edit' },
                        { type: 'setting', path: '/setting' },
                        { type: 'login', path: '/login' },
                        { type: 'bg-colors' },
                    ]}
                />
                <h1>Main</h1>
                <Link to="/main/path1">path1</Link>
                <Link to="/main/path2">path2</Link>
                <Route
                    path="/main/path1"
                    component={() => <h2>path1</h2>}
                ></Route>
                <Route
                    path="/main/path2"
                    component={() => <h2>path2</h2>}
                ></Route>
            </div>
        );
    }
}
export default Index;
