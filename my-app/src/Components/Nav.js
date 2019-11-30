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
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                {this.state.items.map(item => {
                    console.log(item);
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
        );
    }
}

export default Nav;
