import React, { useCallback, useState } from 'react'
import Head from 'next/head'

import AppLayOut from '../components/AppLayOut'
import { Form, Input, Button, Checkbox } from 'antd'
import styled from 'styled-components'
import useInput from '../hooks/useInput'

const ErrorMessage = styled.div`
  color: red;
`
const SignUp = () => {
  const [id, setId] = useInput('')
  const [nickname, setNickname] = useInput('')
  const [password, setPassword] = useInput('')

  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value)
    setPasswordError(e.target.value !== password)
  }, [password])

  const [term, setTerm] = useState('')
  const [termError, setTermError] = useState(false)
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked)
    setTermError(false)
  })

  const onSumbit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true)
    }
    if (!term) {
      return setTermError(true)
    }
  }, [password, passwordCheck, term])

  return (
    <AppLayOut>
      <Head>
        <title>회원가입</title>
      </Head>
      <Form onFinish={onSumbit}>
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
          <label htmlFor="user-nickname">닉네임</label>
        </div>
        <div>
          <Input
            name="user-nickname"
            value={nickname}
            onChange={setNickname}
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
        <div>
          <label htmlFor="user-password-check">비밀번호 확인</label>
        </div>
        <div>
          <Input
            type="password"
            name="user-password-check"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required />
          {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox
            name="user-term"
            checked={term}
            onChange={onChangeTerm}
          >
            개인정보 제공 동의합니다
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            회원가입
          </Button>
        </div>
      </Form>
    </AppLayOut>
  )
}

export default SignUp