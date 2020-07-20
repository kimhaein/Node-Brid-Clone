import React, { useCallback } from 'react'
import { Card, Avatar, Button } from 'antd'

const UserProfile = ({ setIsLoggenIn }) => {

  const onLogout = useCallback(() => {
    setIsLoggenIn(false)
  }, []);

  // 배열로 jsx 사용할 경우, key 필수
  return (
    <Card
      actions={[
        <div key="twit">짹쨱 <br />0</div>,
        <div key="followings">팔로잉<br />0</div>,
        <div key="follower">팔로워<br />0</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>HI</Avatar>}
        title="HI-HAEIN"
      />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  )
}

export default UserProfile