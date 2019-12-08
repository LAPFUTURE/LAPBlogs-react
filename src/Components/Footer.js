import React from 'react';
import { Row, Col } from 'antd';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        let { imgUrl } = props;
        this.state = { imgUrl };
    }
    render() {
        return(<Row className="footer">
            <Col span={12} style={{padding: '40px'}}>
                <h3 className="footer-h3">Created By LAPFUTURE</h3>
                <h3> <a target="_blank" rel="noopener noreferrer" href="https://github.com/LAPFUTURE">Github</a></h3>
                <h3> <a target="_blank" rel="noopener noreferrer" href="http://lapresume.connectyoume.top">Resume</a></h3>
                <h3> <a target="_blank" rel="noopener noreferrer" href="https://blog.csdn.net/liuanpingfirst">CSDN</a></h3>
            </Col>
            <Col span={12}>
                <img className="image" src="https://media-image1.baydn.com/soup_pub_image/zhbepe/e2185825c1073c4c2939c34bc13c9b15.7ec6173dbe78329dfb32170ba7759da9.jpeg@!fhd_webp" alt="pic" />
            </Col>
            <style>{`
                .footer-h3{
                    color: rgba(255, 255, 255);
                }
                .footer {
                    color: rgba(255, 255, 255);
                    background-color: #000;
                    text-align: center;
                }
                .image {
                    width: 100%;
                }
            `}</style>
        </Row>);
    }
}
export default Nav;