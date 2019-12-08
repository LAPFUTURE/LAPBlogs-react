import React, { Component } from 'react';
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
            all: [],
        };
        this.clickShowTran = this.clickShowTran.bind(this);
    }
    clickShowTran(){
        const { showTranslation } = this.state 
        this.setState({
            showTranslation: !showTranslation
        });
    }
    componentDidMount() {
        this.ask();
        this.getAll();
    }
    ask() {
        request('/quote/ask_quote').then(res => {
            this.setState({
                quote: res.data
            })
        });
    }
    getAll() {
        request('/article/get_all').then(res => {
            this.setState({
                all: res.data
            })
        });
    }
    render() {
        const { quote, showTranslation, all} = this.state;
        return (
            <div>
                <Background once={true} />
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
                </Card>
                {
                    all.map(item => {
                        return (
                            <Card title={<div style={{display:'flex', justifyContent:'space-between', marginBottom: '20px'}}>
                                {item.ptype}
                                <Tag color="blue">{item.cname}</Tag>
                                <Tag color="cyan">{item.ctime}</Tag>
                            </div>} key={item.id}>
                                <Tag color="green">{item.title}</Tag>
                            </Card>
                        );
                    })
                }
            </div>
        );
    }
}
export default Index;
