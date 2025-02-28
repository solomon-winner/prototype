import styled from "styled-components";

export const Desc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    min-height: 100vh;
    padding: 1rem;
    
    @media (min-width: 768px) {
        flex-direction: row;
        gap: 3%;
    }
`;

export const Image = styled.div`
    width: 500px;
    height: 80vh;
    background-image: url("${(props) => props.img}");
    background-size: cover;
    background-position: center;
    border-radius: 0 0 60% 60%;
    
    overflow: hidden;
    border-bottom: 15px solid #185601;
    &::before {
        content: '';
        
        bottom: 0;
        left: 0;
    }

    @media (min-width: 768px) {
        height: 80vh;
        border-radius: 0 0 60% 60%;
    }
`;
