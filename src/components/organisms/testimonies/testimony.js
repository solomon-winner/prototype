import styled from "styled-components";

export const TestimonyDiv = styled.div`
    width: 90%;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    background: #f8fff8;
    margin: 4rem 0;

    @media (max-width: 768px) {
        padding: 2rem 1rem;
        gap: 2rem;
    }
`;

export const TestimonyCards = styled.div`
    width: 100%;
    max-width: 800px;
    background: white;
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 8px 32px rgba(24, 86, 1, 0.08);
    transition: transform 0.3s ease;
    overflow: hidden;

    &::before {
        content: '';
        left: 0;
        top: 0;
        height: 100%;
        width: 4px;
        background: linear-gradient(180deg, #185601 0%, #2e8b57 100%);
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(24, 86, 1, 0.12);
    }

    @media (max-width: 768px) {
        padding: 1.5rem;
        width: 95%;
    }
`;

export const Title = styled.h2`
    font-size: clamp(2rem, 3vw, 2.5rem);
    color: #185601;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;

    &::after {
        content: '';
        bottom: -0.8rem;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: #2e8b57;
    }
`;

export const TestifierName = styled.div`
    font-size: clamp(1.1rem, 1.3vw, 1.3rem);
    color: #185601;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    &::before {
        content: '👤';
        font-size: 1.2em;
    }
`;

export const Testimonial = styled.blockquote`
    font-size: clamp(1rem, 1.2vw, 1.1rem);
    color: #4a4a4a;
    line-height: 1.8;
    font-family: 'Open Sans', sans-serif;
    margin-left: 1.5rem;
    font-style: italic;

    &::before {
        content: '“';
        left: -1.2rem;
        top: -0.5rem;
        font-size: 2.5em;
        color: #2e8b57;
        font-family: serif;
    }
`;