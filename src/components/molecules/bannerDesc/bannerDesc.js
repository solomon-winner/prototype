import styled from "styled-components"
import CEO from "../../../assets/CEO_no_bg.png"

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
    background-image: url(${CEO});
    background-size: cover;
    background-position: center;
    border-bottom: 15px solid #185601;
    border-radius: 0 0 60% 60%;
`