import styled from "styled-components"

export const Container = styled.main`
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #f7ba44;
`

export const Card = styled.div`
    width: 30rem;
    border-radius: 6px;

    background-color: #fff;
    box-shadow: 1px 2px 20px 1px rgba(0, 0, 0, .15);

    display: flex;
    flex-direction: column;
`

export const CardHeader = styled.div`
    padding: 3rem 1.5rem;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15);
`

export const CardTitle = styled.h2`
    text-transform: uppercase;
    font-size: 1.4rem;
    color: #f7ba44;
`

export const NewAccountTitle = styled.p`
    color: #fff;
    font-size: 1.4rem;
    margin: 3rem 0 1rem;
`

export const NewAccountLink = styled.a`
    color: #1f535b;
    font-size: 1.4rem;

    cursor: pointer;
`