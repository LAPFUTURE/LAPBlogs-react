import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        let { items } = props;
        this.state = { current: 'mail', items };
    }

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div style={{position: 'sticky', top: '0',zIndex: 2}}>
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                className="space-around"
            >
                {this.state.items.map(item => {
                    return (
                        <Menu.Item key={item.type}>
                            {item.path ? (
                                <Link to={item.path}>
                                    <Icon type={item.type} />
                                </Link>
                            ) : (
                                <Icon type={item.type} />
                            )}
                        </Menu.Item>
                    );
                })}
            </Menu>
            <style>{`
                .space-around {
                    display: flex;
                    justify-content: space-around;
                }
            `}</style>
            </div>
        );
    }
}

export default Nav;
