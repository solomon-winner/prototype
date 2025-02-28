import styled from "styled-components"

export const Desc = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    width: 100%;
    height: 100vh;
`
export const Image = styled.div`
    width: 500px;
    height: 80vh;
    background-image: url("${(props) => props.img}");
    background-size: cover;
    background-position: center;
    border-bottom: 15px solid #185601;
    border-radius: 0 0 60% 60%;
`