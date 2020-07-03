import styled from "styled-components"
import { Form as Unform } from "@unform/web";

import InputArea from "../../shared/components/InputArea"

export const Form = styled(Unform)`
    height: 77vh;
    width: 80%;
    margin: 3rem auto;

    display: grid;
    grid-template-rows:  10rem 1fr;
`

export const TextArea = styled(InputArea)`
    box-sizing: border-box;
    background-color: transparent;
    color: #1f535b;
    font-size: 4.2rem;
    font-family: "Roboto";

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
    font-family: "Roboto";

    /* overflow: auto; */
    resize: none;
    height: 100%;

    width: 100%;
    padding: 5rem 1.6rem 1.2rem;
    border: none;
`