import styled from 'styled-components'

export const Container = styled.div`
    /* background: #fafafa; */
    min-height: 100vh;
    display: grid;
    grid-template-rows: 10% auto 10%;
    grid-template-columns: 250px auto auto;
    grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
`

export const Content = styled.main`
    grid-area: content;
    background-color: #FFF;
    display:flex;
    flex-direction: column;
    padding: 50px;
    justify-content: center;
    align-items: center;
`

export const Footer = styled.footer`
    grid-area: footer;
    background-color: #2D2D2D;
`
