import styled from 'styled-components'
export const Button = styled.button`
    cursor: pointer;
    display: block;
    text-align: center;
    color: #fff;
    line-height: 1;
    border: none;
    border-radius: 24px;
    font-size: 14px;
    outline: none;
    text-decoration: none;
    margin: 0 24px;
    padding: 10px 16px;
    background: #76a6ef;
    margin-top: 12px;
    margin-bottom: 12px;
    transition: .3s transform;
    box-shadow:
        0 3px 6px -1px rgba(0, 0, 0, 0.12),
        0 10px 36px -4px rgba(118, 166, 239, 0.64);
    :hover {
        transform: scale(1.09, 1.09) !important;
    }
`