import styled, { css } from 'styled-components'
const hover = css`
    transform: scale(1.09, 1.09) !important;
    box-shadow:
        0 3px 6px -1px rgba(0, 0, 0, 0.12),
        0 10px 36px -4px rgba(118, 166, 239, 0.64);
`
export const Button = styled.button`
    cursor: ${props => props.loading ? 'wait' : 'pointer' };
    display: block;
    text-align: center;
    color: ${props => props.primary ? '#fff' : '#76a6ef'};
    line-height: 1;
    border: 2px solid #76a6ef;
    border-radius: 24px;
    font-size: 14px;
    outline: none;
    text-decoration: none;
    margin: 0 6px;
    padding: 10px 0;
    background: ${props => props.primary ? '#76a6ef' : '#fff'};
    margin-top: 12px;
    margin-bottom: 12px;
    transition: all .3s cubic-bezier(0.4,0,0.2,1);
    transition-property: transform, box-shadow;
    box-shadow:
        0 0 0 -1px rgba(255, 255, 255, 0),
        0 0 0 -4px rgba(255, 255, 255, 0);
    &:hover {
        ${props => props.loading || hover }
    }
`