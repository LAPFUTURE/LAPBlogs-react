import React, { Component } from 'react';
import { Col, Row } from 'antd';
import Background from '../../Components/Background';

class Index extends Component {
    render() {
        return (
            <div className="home">
                <Row>
                    <Col span={20} offset={2}>
                        <h1>Hello,</h1>
                        <p>My name is LAPFUTURE.</p>
                        <p>
                            I am an Web developer. I am interested in Web
                            Programming and fall in love with JavaScript.
                        </p>
                        <p>
                            I like wandering in
                            <a
                                href="https://github.com/LAPFUTURE"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                            and
                            <a
                                href="https://juejin.im/user/5b7a3e7be51d4538b406bb56"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Juejin
                            </a>
                            . I have two blog websites, one is
                            <a
                                href="http://lapblogs.connectyoume.top/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LAPBlogs
                            </a>
                            , another is
                            <a
                                href="https://blog.csdn.net/liuanpingfirst"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CSDN
                            </a>
                            . This is my
                            <a
                                href="http://lapresume.connectyoume.top"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Online Resume.
                            </a>
                        </p>
                        <p>
                            If you have some interests in Web Programming, you
                            can join QQGroup:
                            {/* <a-popover title="QQGroup:1012810379">
                                <template slot="content">
                                    <p>
                                        <img
                                            src="../assets/qqgroup.png"
                                            alt="QQGroup:1012810379"
                                        />
                                    </p>
                                </template>
                                <a href="javascript:void(0);">1012810379</a>{' '}
                            </a-popover> */}
                            , we can learn from each other and enjoy
                            Programmings.
                        </p>
                        <p>
                            In free time, I usually watch some web course, play
                            SGS game, chat with my friends and my GF.
                        </p>
                    </Col>
                    <Col>
                        <p style={{ textAlign: 'center' }}>
                            <button
                                className="radius-button"
                                onClick={() => {
                                    this.props.history.push('/main');
                                }}
                            >
                                DateWithYou
                            </button>
                        </p>
                    </Col>
                </Row>
                <Background />
                <style>{`
                    p {
                        font-size: 1.5em;
                        font-weight: 300;
                        line-height: 1.4;
                        max-width: 26em;
                    }
                    a {
                        margin-left: 8px;
                        z-index: 5;
                        text-decoration: none;
                        color: #121314;
                        position: relative;
                    }
                    a:after {
                        content: '';
                        position: absolute;
                        z-index: 0;
                        top: 55%;
                        left: -0.1em;
                        right: -0.1em;
                        bottom: 0;
                        transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
                        background-color: rgba(79, 192, 141, 0.5);
                    }
                    a:hover:after {
                        top: 0%;
                    }
                    a:hover {
                        color: #121314;
                    }
                    button[class='radius-button'] {
                        border: 1px solid #42b983;
                        border-radius: 33px;
                        padding: 10px 30px;
                        background-color: white;
                        display: inline-block;
                        margin-right: 20px;
                        color: #42b983;
                    }
                    button[class='radius-button']:hover {
                        background-color: rgba(66, 185, 131, 0.1);
                        text-decoration: none;
                    }
                `}</style>;
            </div>
        );
    }
}

export default Index;
