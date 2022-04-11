import React from 'react'
import styles from './Header.module.scss'
import { Space, Layout } from 'antd'
import { Button } from '../Button'

const Header = () => {
    const {Header} = Layout;
  return (
    <Header>
        <Space>
            <div>
                <img src="/Images/logo.png" alt="logo" />
            </div>
            <Button type={'primary-outline'} text={'Категории'}/>
        </Space>
    </Header>
  )
}

export default Header