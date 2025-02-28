import styled from "styled-components";

export const AboutDiv = styled.div`
    margin-top: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    height: fit-content;
`

export const AboutText = styled.div`
    width: 40%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1rem;
    height: 500px;
    color: green;
    font-family: 'MyCustomFont', sans-serif;
`
export const AboutImage = styled.div`
    width: 40%;
    height: 500px;
    background-color: white;
    background-image: url("${(props) => props.img}");
    background-size: cover;
    background-position: center;

`
