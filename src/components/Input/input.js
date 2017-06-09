import React, { Component } from 'react'
import PropTypes from 'prop-types'
import omit from 'omit'
import { Label, LabelTitle, LabelInput } from './style'
export default class Input extends Component {    
    constructor (props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange (e) {
        this.props.onChange(e)
    }

    render () {
        const props = this.props
        return props.title ? (
            <Label>
                <LabelTitle>{ props.title }</LabelTitle>
                <LabelInput onChange={this.onChange} {...omit(['onChange'], props)}  type="text"/>
            </Label>
        ) : (
            <LabelInput onChange={this.onChange} {...omit(['onChange'], props)}  type="text"/>
        )
    }
}
Input.propTypes = {
    onChange: PropTypes.func,
    title: PropTypes.any
}
Input.defaultProps = {
    onChange: () => {}
}
    