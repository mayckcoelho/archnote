import styled from "styled-components"
import { Form as Unform } from "@unform/web";

import InputArea from "../../shared/components/InputArea"

export const NoteInfo = styled.div`
    height: 8rem;
`

export const Note = styled.section`
    grid-area: note;

    height: 90%;
    width: 80%;
    margin: 3rem auto;

    @media (max-width: 720px) {
        grid-area: list;
    }
`

export const Form = styled(Unform)`
    height: 90%;

    display: grid;
    grid-template-rows: 13rem 1fr;
`

export const TextArea = styled(InputArea)`
    box-sizing: border-box;
    background-color: transparent;
    color: #1f535b;
    font-size: 4.2rem;
    font-family: "Merriweather";
    font-weight: bold;

    /* overflow: auto; */
    resize: none;
    height: auto;

    width: 100%;
    padding: 1.2rem 1.6rem;
    border: none;
    border-left: 2px solid #eaeaea;
`

export const TextAreaContent = styled(InputArea)`
    box-sizing: border-box;
    background-color: transparent;
    color: #3c3c3c;
    font-size: 2.2rem;
    font-family: "Merriweather";

    /* overflow: auto; */
    resize: none;
    height: 100%;

    width: 100%;
    padding: 5rem 1.6rem 1.2rem;
    border: none;
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
