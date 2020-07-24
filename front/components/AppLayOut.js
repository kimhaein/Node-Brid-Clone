import react, { useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Menu, Input, Row, Col } from 'antd'

import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginForm'

import styled from 'styled-components'

const SearchInput = styled(Input.Search)`
  verticalAlign: 'middle'
`

const AppLayOut = ({ children }) => {
  const { isLoggedIn } = useSelector(state => state.user);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {
            isLoggedIn ? <UserProfile /> : <LoginForm />
          }
        </Col>
        <Col xs={24} md={12}>
          <div>{children}</div>
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/kimhaein/react-nodebird" target="_blank" rel='noreferrer noopener'>깃허브</a>
        </Col>
      </Row>
    </div>
  )
}

AppLayOut.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayOut