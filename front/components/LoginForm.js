import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Form, Input, Button } from 'antd'
import styled from 'styled-components'
import useInput from '../hooks/useInput'

const ButtonWrapper = styled.div`
  margin-top:10px;
`

const FormWrapper = styled(Form)`
  padding: 10px
`

const LoginForm = ({ setIsLoggenIn }) => {
  const [id, setId] = useInput('')
  const [password, setPassword] = useInput('')

  const onSumbitForm = useCallback(() => {
    console.log(id, password)
    setIsLoggenIn(true)
  }, [])

  return (
    <FormWrapper onFinish={onSumbitForm}>
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
        <Link href="/signuo"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  )
}

LoginForm.propTypes = {
  setIsLoggenIn: PropTypes.func.isRequired,
}

export default LoginForm