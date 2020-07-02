import styled from "styled-components"
import { Form as Unform } from "@unform/web";

import Input from "../../../shared/components/Input"

export const Form = styled(Unform)`
    width: 90%;
    margin: 3rem auto;

    display: flex;
    flex-direction: column;
`

export const TextInput = styled(Input)`
    background-color: #f7f9f9;
    color: #1f535b;

    width: 100%;
    margin: 1.5rem 0 1.5rem;
    padding: 1.2rem 1.6rem;
    border-radius: 4px;
    border: 2px solid #f7f9f9;

    :focus {
        color: #1f535b;
        background-color: #fbfcfc;
    }
`

export const SubmitButton = styled.button`
    width: 100%;

    margin-top: 1.5rem;
    padding: 1.2rem 1.6rem;
    border-radius: 4px;
    border: 2px solid #1f535b;

    text-transform: uppercase;
    color: #fff;
    background-color: #1f535b;
`