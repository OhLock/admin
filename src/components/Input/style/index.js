import styled, { css } from 'styled-components'

const focusMixin = css`
    transform: scale(.75) translateY(-39px);
    color: #76a6ef;
`

const errorMixinSpan = css`
    color: #d50000 !important;
`
const errorMixinInput = css`
    border-bottom-color: #d50000 !important;
    color: #d50000 !important;
`


export const Label = styled.label`
    position: relative;
    display: block;
    & span {
        ${props => !props.focus || focusMixin}
    }
    & input {
        ${props => !props.focus || 'border-bottom-color: #76a6ef;'}
    }
`
export const LabelMain = styled.div`
    position: relative;
    margin-bottom: 22px;
    padding-top: 22px;
`
export const LabelTitle = styled.span`
    top: 0;
    left: 0;
    transform-origin: bottom left;
    position: absolute;
    display: block;
    line-height: 37px;
    font-size: 13px;
    transition: all .3s cubic-bezier(0.4,0,0.2,1);
    transition-property: color, transform;
    width: 100%;
    cursor: text;
    ${props => !props.error || errorMixinSpan}
`
export const LabelInput = styled.input`
    display: block;
    width: 100%;
    border: none;
    background-color: transparent;
    font-size: 14px;
    max-width: 100%;
    outline: none;
    transition: .3s color;
    padding: 10px 0;
    border: none;
    border-bottom: 2px solid #E6EDF4;
    color: #7E899B;
    transition: border-bottom-color .3s cubic-bezier(0.4,0,0.2,1);
    ${props => !props.error || errorMixinInput}
`
export const LabelError = styled.div`
    position: absolute;
    bottom: -20px;
    left: 0;
    line-height: 20px;
    color: #d50000;
`