import styled from "styled-components";

export const AboutDiv = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    margin: 4rem auto;
    max-width: 1440px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 5%;
        padding: 4rem 2rem;
    }
`;

export const AboutText = styled.div`
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #185601;
    
    h3 {
        font-size: clamp(2rem, 3vw, 3rem);
        margin-bottom: 1.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        position: relative;
        
        &::after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 0;
            width: 60px;
            height: 3px;
            background: #2e8b57;
        }
    }

    p {
        font-size: clamp(1rem, 1.2vw, 1.2rem);
        line-height: 1.8;
        color: #4a4a4a;
        font-family: 'Open Sans', sans-serif;
        max-width: 600px;
    }

    @media (min-width: 768px) {
        width: 50%;
        padding: 2rem;
    }
`;

export const AboutImage = styled.div`
    width: 100%;
    height: 300px;
    background-image: url("${(props) => props.img}");
    background-size: cover;
    background-position: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    overflow: hidden;
    
    &::before {
        content: '';
        inset: 0;
        background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(24,86,1,0.05) 100%);
    }

    @media (min-width: 768px) {
        width: 50%;
        height: 500px;
        display:hidden;
    }

    @media (min-width: 1024px) {
        height: 700px;
    }
`;