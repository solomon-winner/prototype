import styled from "styled-components"
import CEO from "../../../assets/CEO_no_bg.png"

export const Desc = styled.div`
    border-bottom: 10px solid #185601;
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 5%;
    width: 100%;
    height: 80vh;
    border-radius: 0 0 60% 0;
`
export const Image = styled.div`
    width: 500px;
    height: 70vh;
    background-image: url(${CEO});
    background-size: cover;
    background-position: center;
`