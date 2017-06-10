import React, { Component } from 'react'
import { Input, Button } from '../../components'
import { Box, H2, Flex, P } from './style'
import { Link } from 'react-router-dom'
import { Map } from 'immutable'
import axios from 'axios'
export default class Home extends Component {
    constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.signin = this.signin.bind(this)
        this.state = {
            email: Map({
                err: null,
                value: ''
            }),
            pwd: Map({
                err: null,
                value: ''
            })
        }
    }
    handleChange (e, type) {
        this.setState({
            [type]: this.state[type].set('value', e.target.value)
        })
    }
    signin () {
        const { email, pwd } = this.state
        let emailVal = email.get('value')
        let pwdVal = pwd.get('value')
        axios.post('/signin', {
            email: emailVal,
            pwd: pwdVal
        })
            .then(data => {
                console.log(data)
            })
            .catch(data => {
                console.log(data)
            })
    }
    render () {
        const { email, pwd } = this.state
        return (
            <Box>
                <H2>登录</H2>
                <Input
                    title="用户名或邮箱"
                    error={ email.get('err') }
                    onChange={ e => this.handleChange(e, 'email') }
                />
                <Input
                    pwd
                    title="账号密码"
                    error={ pwd.get('err') }
                    onChange={ e => this.handleChange(e, 'pwd') }
                />
                <P.Prompt>
                    <Link to="/aa">忘记密码？</Link>
                    <Link to="/SignUp">点击注册。</Link>
                </P.Prompt>
                <Flex.Row>
                    <Button>Github</Button>
                    <Button primary onClick={ this.signin }>登陆</Button>
                </Flex.Row>
            </Box>
        )
    }
}
/*function isEmail (str) {
    let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
    return reg.test(str)
}*/