import styled from "styled-components";

export const Container = styled.main`
    height: 100vh;

    display: grid;
    grid-template-areas: 
        "header header"
        "subheader subheader"
        "list note";
    grid-template-rows: 8rem 8rem auto;
    grid-template-columns: 1fr 2fr;
    background: #fbfcfc;

    @media (max-width: 720px) {
        grid-template-areas: 
        "header header"
        "subheader subheader"
        "list list";
    }
`

export const NewNoteContent = styled.div`
    box-sizing: border-box;

    max-width: 70%;
    margin: 0 2rem 0 auto;

    padding: 2rem 0;
`

export const NewNote = styled.button`
    border-radius: 25px;
    padding: 1.5rem 3rem;
    cursor: pointer;

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

export const OrderSelect = styled.select`
    padding: .5rem 0 .5rem;
    background-color: transparent;
    border: none;
    font-family: "Roboto";
    font-size: 1.6rem;
`

export const Header = styled.header`
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

export const SubHeader = styled.div`
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    grid-area: subheader;
    border-bottom: 2px solid #f6f6f6;

    & > div {
        color: #535353;
    }
`

export const List = styled.section`
    border-right: 2px solid #f6f6f6;

    grid-area: list;
`

export const Note = styled.section`

    grid-area: note;

    @media (max-width: 720px) {
        display: none;
    }
`