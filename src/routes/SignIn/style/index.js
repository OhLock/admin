import styled from 'styled-components'

export const Box = styled.div`
    display: block;
    max-width: 240px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    padding: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const H2 = styled.h2`
    font-size: 3em;
    font-weight: 300;
    color: #586c78;
    text-align: center;
`
export const P = {
    Prompt: styled.p`
        font-size: 12px;
        font-weight: 400;
        color: #b4b4b4;
        text-align: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
        & a {
            color: #b4b4b4;
            text-decoration: none;
        }
    `
}
export const Flex = {
    Column: styled.div`
        display: flex;
        flex-direction: column;
    `,
    Row: styled.div`
        display: flex;
        flex-direction: Row;
        justify-content: space-between;
        > button {
            width: 45%;
            min-width: 45%;
            max-width: 45%;
        }
    `
}