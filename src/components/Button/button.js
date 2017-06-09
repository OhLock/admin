import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
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
        const {type, size, prefixCls, onClick, style} = this.props
        const context = <span>{trim(this.props.children)}</span>
        const className = classnames(prefixCls, {
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${size}`]: size
        })
        return (
            <ButtonStyle style={style} className={className} onClick={ onClick }>{context}</ButtonStyle>
        )
    }
}

Button.propTypes = {
    prefixCls: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.any
}
Button.defaultProps = {
    type: '',
    size: '',
    prefixCls:  'btn',
    onClick: () => {}
}