import React, { Component } from 'react'
import { Input, Button } from '../../components'
import { Box, H2 } from './style'

export default class Home extends Component {
    render () {
        return (
            <Box>
                <H2>Sign In</H2>
                <Input title="Name"/>
                <Input title="Password"/>
                <Button>Next</Button>
                <span style={{ textAlign: 'center', margin: '6px 0' }}>or</span>
                <Button>More</Button>
            </Box>
        )
    }
}