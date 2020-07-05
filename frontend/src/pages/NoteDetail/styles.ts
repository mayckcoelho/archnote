import styled from "styled-components"

import ContentEditable from "react-contenteditable"

export const NoteInfo = styled.div`
    height: 8rem;

    grid-area: info;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1.6rem;

    & > img {
        cursor: pointer;
    }

    @media (max-width: 720px) {
        padding-left: 1.6rem;
    }
`

export const Note = styled.section`
    grid-area: note;

    height: 100%;
    width: 100%;
    overflow: auto;

    padding-left: 8rem;

    @media (max-width: 720px) {
        grid-area: list;
        padding: 0;
    }
`
export const NoteDetailContent = styled.div`
    display: grid;
    grid-template-areas: 
        "info attachments"
        "title attachments"
        "content attachments";

    height: 100%;

    grid-template-rows: 8rem 1fr 2fr;
    grid-template-columns: 1fr 20rem;

    @media (max-width: 720px) {
        grid-template-areas: 
            "info info"
            "title title"
            "content content"
            "attachments attachments";
    }
`

export const TextArea = styled(ContentEditable)`
    grid-area: title;
    box-sizing: border-box;
    background-color: transparent;
    color: #1f535b;
    font-size: 4.2rem;
    font-family: "Merriweather";
    font-weight: bold;

    width: 100%;
    padding: 1.2rem 1.6rem;
    border: none;
    border-left: 2px solid #eaeaea;

    &:empty:before {
        content: attr(placeholder);
        color: #555;
    }
`

export const TextAreaContent = styled(ContentEditable)`
    grid-area: content;
    box-sizing: border-box;
    background-color: transparent;
    color: #3c3c3c;
    font-size: 2.2rem;
    font-family: "Merriweather";

    width: 100%;
    padding: 5rem 1.6rem 1.2rem;
    border: none;

    &:empty:before {
        content: attr(placeholder);
        color: #555;
    }
`

export const EmptyNote = styled.div`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > img {
        height: 40rem;
        width: 40rem;
    }
`
