import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button as ButtonStyle } from './style'

function trim (str, is_global) {
    let result
    result = str.replace(/(^\s+)|(\s+$)/g, '')
    if(is_global) {
        result = result.replace(/\s/g, '')
    }
    return result
}

export default class Button extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        const { onClick, style, primary, loading } = this.props
        const context = <span>{ trim(this.props.children) }</span>
        return (
            <ButtonStyle loading={ loading } primary={ primary } style={ style } onClick={ onClick }>
                { loading ? 'loading' : context }
            </ButtonStyle>
        )
    }
}

Button.propTypes = {
    primary: PropTypes.bool,
    size: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.any,
    loading: PropTypes.bool,
}
Button.defaultProps = {
    onClick: () => {}
}