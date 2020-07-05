import styled from "styled-components"

export const Container = styled.div`
    grid-area: attachments;

    padding: 2rem;
    background-color: #e8e8e8;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 720px) {
        flex-direction: row;
    }
`

export const AttachmentList = styled.div`
    & > h1 {
        margin-bottom: 2rem;
    }
`

export const AttachmentItem = styled.div`
    border: 1px solid #4c4c4c;
    padding: .5rem;
    border-radius: .4rem;

    margin: 1rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    & > a {
        text-decoration: none;
        color: #4c4c4c
    }

    & > span {
        margin-left: 1rem;
        cursor: pointer;
    }
`

export const AddAttachment = styled.label`
    position: relative;
    overflow: hidden;
    display: inline-block;

    & > button {
        border: 2px solid gray;
        color: #323232;
        background-color: white;
        padding: .5rem 3rem;
        border-radius: 25px;
        font-size: 1.8rem;
        width: 100%;

        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
`