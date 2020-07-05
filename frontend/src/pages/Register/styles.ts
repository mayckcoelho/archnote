import styled from "styled-components"
import Background from "../../assets/background.jpg"

export const Container = styled.main`
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`

export const Card = styled.div`
    width: 50rem;
    border-radius: 6px;

    background-color: #fff;
    box-shadow: 1px 2px 20px 1px rgba(0, 0, 0, .15);

    display: flex;
    flex-direction: column;

    @media (max-width: 720px) {
        width: 80%;
    }
`

export const CardHeader = styled.div`
    width: 60%;
    margin: 4rem auto 0;
`

export const CardTitle = styled.h2`
    text-transform: uppercase;
    font-size: 1.4rem;
    color: #f8c200;
`
export const Name = styled.h1`
    position: absolute;
    top: 25px;
    left: 25px;

    font-family: 'Squada One', cursive;
    font-size: 3.6rem;
`

export const AccountTitle = styled.p`
    color: #323232;
    font-size: 1.4rem;
    margin: 1rem auto;
`

export const AccountLink = styled.a`
    color: #1f535b;
    font-size: 1.4rem;
    margin: 1rem auto 2rem;

    cursor: pointer;
`