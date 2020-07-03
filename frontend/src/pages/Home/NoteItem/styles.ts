import styled from "styled-components";

export const Container = styled.div`
    border-bottom: 2px solid #eaeaea;

    /* background-color: #fcfcfc; */

    transition-duration: .5s;

    cursor: pointer;

    &:hover {
        background-color: #eaeaea;
        box-shadow: 1px 2px 20px 1px rgba(0, 0, 0, .15);
        -webkit-transform: translate(0px, -5px);
        -ms-transform: translate(0px, -5px);
        transform: translate(0px, -5px);
        -webkit-transform-origin: 50% 100%;
        -ms-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
    }
`

export const Content = styled.div`
    box-sizing: border-box;

    max-width: 90%;
    margin: 0 auto;

    padding: 2rem 0;
`

export const NoteTitle = styled.strong`
    margin: 1rem 0;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`

export const NoteContent = styled.p`
    margin: 1.5rem 0;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`

export const NoteDate = styled.span`
    border-radius: 25px;
    background-color: #eaeaea;
    padding: .5rem 1rem;

    font-weight: bold;

    text-transform: capitalize;
`