import styled from "styled-components";

export const Container = styled.div`
    border-bottom: 2px solid #eaeaea;

    transition-duration: .5s;

    cursor: pointer;

    &.selected {
        background-color: #eaeaea;
    }

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

    padding-top: 2rem;
`

export const NoteTitle = styled.div`
    margin: 1rem 0;
    font-weight: bold;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`

export const NoteContent = styled.div`
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

export const BottomInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 90%;
    margin: 0 auto;
    padding-bottom: 2rem;

    & > img {
        cursor: pointer;
    }
`