import React, { Component } from 'react';
import request from '../../Tools/fetch';
import Nav from '../../Components/Nav';
import Background from '../../Components/Background';
import Footer from '../../Components/Footer';
import { Card, Tag, Badge, Button } from 'antd';

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
                        { type: 'write', path: '/write' },
                        { type: 'setting', path: '/setting' },
                        { type: 'login', path: '/login' },
                        { type: 'bg-colors' },
                    ]}
                />
                <Card style={{ width: '100%',marginBottom: '20px',marginTop: '10px' }}>
                    <p>{quote.content}</p>
                    <div>
                        <Tag onClick={this.clickShowTran} color="magenta">Show Translation</Tag>
                        {showTranslation && <span>{quote.translation}</span>}
                    </div>
                </Card>
                <div style={{minHeight: '100vh'}}>
                    {
                        all.map(item => {
                            return (
                                <Card hoverable={true} style={{marginBottom: '20px'}} 
                                    title={<div style={{display:'flex', justifyContent:'space-between'}}>
                                            {item.ptype}
                                            <Tag style={{lineHeight: '22px'}} color="blue">{item.cname}</Tag>
                                            <Tag color="cyan">{item.ctime}</Tag>
                                        </div>}
                                    key={item.id}>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <span>
                                            <Badge count={item.star} style={{ backgroundColor: '#52c41a',marginRight: '20px' }} >
                                            </Badge>
                                            <Badge count={item.diss} />
                                        </span>
                                        <span style={{float: 'right'}}>
                                            <Button size="small" type="primary">Show Detail</Button>
                                        </span>
                                    </div>
                                </Card>
                            );
                        })
                    }
                </div>
                <Footer />
            </div>
        );
    }
}
export default Index;
