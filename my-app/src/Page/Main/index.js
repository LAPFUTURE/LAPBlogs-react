import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import request from '../../Tools/fetch';
import Nav from '../../Components/Nav';
import Background from '../../Components/Background';
import { Card, Tag } from 'antd';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            quote: {},
            showTranslation: false,
        };
        this.clickShowTran = this.clickShowTran.bind(this);
    }
    clickShowTran(){
        const { showTranslation } = this.state 
        this.setState({
            showTranslation: !showTranslation
        });
        console.log(showTranslation)
    }
    componentDidMount() {
        this.ask();
    }
    ask() {
        request('/quote/ask_quote').then(res => {
            this.setState({
                quote: res.data
            })
        });
    }
    render() {
        const { quote, showTranslation} = this.state;
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
                <Card style={{ width: '100%' }}>
                    <p>{quote.content}</p>
                    <div>
                        <Tag onClick={this.clickShowTran} color="magenta">Show Translation</Tag>
                        {showTranslation && <span>{quote.translation}</span>}
                    </div>
                    {/* <p>{this.state.quote.assign_date}</p>
                    <p>{this.state.quote.author}</p>
                    <p>{this.state.quote.picture_url}</p>
                    <p>{this.state.quote.translation}</p> */}
                </Card>
                <h1>Main</h1>
                <Link to="/main/path1">path1</Link>
                <Link to="/main/path2">path2</Link>
                <Route
                    path="/main/path1"
                    component={() => <h2>path1</h2>}
                />
                <Route
                    path="/main/path2"
                    component={() => <h2>path2</h2>}
                />
            </div>
        );
    }
}
export default Index;
