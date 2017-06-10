import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from '../../components'
import { Box, H2, Flex } from './style'
import { Map } from 'immutable'
export default class SignUp extends Component {
    constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.signin = this.signin.bind(this)
        this.singup = this.signup.bind(this)
        this.state = {
            email: Map({
                err: null,
                value: ''
            }),
            user: Map({
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
        console.log(emailVal, pwdVal)
    }
    signup () {
        const { history } = this.props
        history.push('/SignIn')
    }
    render () {
        const { email, pwd } = this.state
        return (
            <Box>
                <H2>注册</H2>
                <Input
                    title="邮箱"
                    error={ email.get('err') }
                    onChange={ e => this.handleChange(e, 'email') }
                />
                <Input
                    title="用户名"
                    error={ pwd.get('err') }
                    onChange={ e => this.handleChange(e, 'user') }
                />
                <Input
                    pwd
                    title="账号密码"
                    error={ pwd.get('err') }
                    onChange={ e => this.handleChange(e, 'pwd') }
                />
                <Flex.Row>
                    <Button onClick={ this.singin }>登陆</Button>
                    <Button primary onClick={ this.signup }>注册</Button>
                </Flex.Row>
            </Box>
        )
    }
}
SignUp.propTypes = {
    history: PropTypes.any
}
/*function isEmail (str) {
    let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
    return reg.test(str)
}*/