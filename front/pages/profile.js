import React from 'react'
import Head from 'next/head'

import AppLayOut from '../components/AppLayOut'
import FollowList from '../components/FollowList'
import NicknameEditForm from '../components/NicknameEditForm'

const Profile = () => {
  const followingList = [
    { nickname: "제로초" },
    { nickname: "하이" },
    { nickname: "노드버드" }
  ]

  const followerList = [
    { nickname: "제로초" },
    { nickname: "하이" },
    { nickname: "노드버드" }
  ]

  return (
    <>
      <Head>
        <title>내 프로필</title>
      </Head>
      <AppLayOut>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayOut>
    </>
  )
}

export default Profile