import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Form, Input, Button } from 'antd'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import { loginAction } from '../reducers/user'

// 스타일을 객체로 넣을 경우, 값이 같아도 리렌더링이 됨 최적화 필요!
// useCallback : 함수를 캐싱
// useMemo : 값을 캐싱

// 함수형에서 리랜더링 : 다시 실행되긴하지만, 변경 된 사항만 다시 그림

const ButtonWrapper = styled.div`
  margin-top:10px;
`

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, setId] = useInput('');
  const [password, setPassword] = useInput('');

  const onSumbitForm = useCallback(() => {
    dispatch(loginAction({ id, password }))
  }, [id, password])

  // onFinish : e.preventDefalut() 이미 적용
  return (
    <Form onFinish={onSumbitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
      </div>
      <div>
        <Input
          name="user-id"
          value={id}
          onChange={setId}
          required
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
      </div>
      <div>
        <Input
          type="password"
          name="user-password"
          value={password}
          onChange={setPassword}
          required />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </Form>
  )
}

LoginForm.propTypes = {
}

export default LoginForm