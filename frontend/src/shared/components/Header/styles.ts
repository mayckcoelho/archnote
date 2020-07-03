import styled from "styled-components"

export const Container = styled.header`
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    grid-area: header;
    box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, .15);
    background: #f7ba44;

    & > div {
        color: #535353;
    }
`

export const UserDetail = styled.div`
    display: flex;
    align-content: center;
`

export const ButtonLogOut = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    margin-left: 1rem;
`