import React, { Component } from 'react'
import PropTypes from 'prop-types'
import omit from 'omit'
import { Label, LabelTitle, LabelInput, LabelMain, LabelError } from './style'
export default class Input extends Component {    
    constructor (props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.state = {
            isMove: false
        }
    }

    onChange (e) {
        this.setState({
            isMove: true
        })
        this.props.onChange(e)
    }

    onFocus () {
        this.setState({
            isMove: true
        })
    }

    onBlur (e) {
        if (e.target.value === '' || e.target.value === null) {
            this.setState({
                isMove: false
            })
        }
    }

    render () {
        const props = this.props
        return (
            <LabelMain>
                <Label
                    focus={ this.state.isMove }
                    error={ !!props.error }
                >
                    <LabelInput
                        onFocus={ this.onFocus }
                        onBlur={ this.onBlur }
                        onChange={ this.onChange }
                        { ...omit(['onChange'], props) }
                        type={ props.pwd ? 'password' : 'text' }
                        autocomplete="new-password"
                        error={ !!props.error }
                    />
                    <LabelTitle error={ !!props.error }>
                        { props.title }
                    </LabelTitle>

                </Label>
                {
                    props.error ? (
                        <LabelError>
                            { props.error }
                        </LabelError>
                    ) : (
                        ''
                    )
                }
            </LabelMain>
        )
    }
}
Input.propTypes = {
    onChange: PropTypes.func,
    title: PropTypes.any,
    error: PropTypes.string,
    pwd: PropTypes.bool
}
Input.defaultProps = {
    onChange: () => {}
}
    