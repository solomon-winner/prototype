import styled from "styled-components";

export const TestimonyDiv = styled.div`
    width: 90%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 30px;
    max-width: 100vw;
    box-sizing: border-box;
    margin-top: 5%;
    text-align: start;
`

export const TestimonyCards = styled.div`
    width: 100%;
    height: fit-content;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
    padding: 20px;
`
export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: green;
    width: 100%;
`
export const TestifierName = styled.div`
    font-size: 1rem;
    color: green;
    font-weight: bold;
    padding: 10px;
    display: flex;
    gap: 10px;

`
export const Testimonial = styled.div`
    font-size: 1rem;
    color: green;
    font-style: italic;
`