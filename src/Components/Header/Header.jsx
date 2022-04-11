import React from 'react'
import styles from './Header.module.scss'
import { Space, Layout, Input, Dropdown, Button, Menu, message } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons';


const Header = () => {
    const {Header} = Layout;
    const { Search } = Input;

    const handleMenuClick = (e) => {
      message.info('Click on menu item.');
      console.log('click', e);
    }

    const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          1st menu item
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          2nd menu item
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          3rd menu item
        </Menu.Item>
      </Menu>
    );


  return (
    <Header>
        <Space direction="horizontal" align='center'>
            <div>
                <img src="/Images/logo.png" alt="logo" />
            </div>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Click me <DownOutlined />
              </a>
            </Dropdown>
            <Search placeholder='Что Вы хотите изучать?' />
        </Space>
    </Header>
  )
}

export default Header