import styled from "styled-components";

export const NewNoteContent = styled.div`
    box-sizing: border-box;

    max-width: 90%;
    margin: 2rem auto;

    & p {
        font-size: 1.8rem;
        color: #535353;
        font-weight: bold;
    }
`

export const NewNote = styled.button`
    border-radius: 25px;
    padding: .5rem 3rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #f7ba44;
    border: none;

    transition-duration: .5s;

    &:hover {
        box-shadow: 1px 2px 20px 1px rgba(0, 0, 0, .15);
        -webkit-transform: translate(0px, -5px);
        -ms-transform: translate(0px, -5px);
        transform: translate(0px, -5px);
        -webkit-transform-origin: 50% 100%;
        -ms-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
    }
`

export const List = styled.section`
    border-right: 2px solid #fcfcfc;

    grid-area: list;
`