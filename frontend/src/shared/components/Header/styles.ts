import styled from "styled-components"

export const Container = styled.header`
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    grid-area: header;
    background: #f8c200;

    & > div {
        color: #535353;
    }

    & > h1 {
        font-family: 'Squada One', cursive;
        font-size: 4.8rem;

        @media (max-width: 720px) {
            font-size: 3.6rem;
        }
    }
`

export const UserDetail = styled.div`
    display: flex;
    align-items: center;
`

export const ButtonLogOut = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    margin-left: 1rem;
`