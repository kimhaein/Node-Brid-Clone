import react from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Menu } from 'antd'

const AppLayOut = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <a><Link href="/">노드버드</Link></a>
        </Menu.Item>
        <Menu.Item>
          <a> <Link href="/profile">프로필</Link></a>
        </Menu.Item>
        <Menu.Item>
          <a><Link href="/signup">회원가입</Link></a>
        </Menu.Item>
      </Menu>
      <div>{children}</div>
    </div>
  )
}

AppLayOut.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayOut