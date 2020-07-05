import styled from "styled-components"

const Layout = styled.main`
    height: 100vh;

    display: grid;
    grid-template-areas: 
        "header header"
        "list note";
    grid-template-rows: 8rem auto;
    grid-template-columns: 30rem 2fr;
    background: #fcfcfc;

    @media (max-width: 720px) {
        grid-template-areas: 
        "header header"
        "list list";
    }
`

export default Layout;