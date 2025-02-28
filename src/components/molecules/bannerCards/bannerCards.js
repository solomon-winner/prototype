import styled from "styled-components";

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;  // Default to single column
    gap: 1.5rem;
    padding: 1.5rem;
    max-width: 1440px;
    margin: 0 auto;

    // Tablet and above
    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        padding: 2rem;
    }

    // Large desktop
    @media (min-width: 1200px) {
        gap: 3rem;
        padding: 3rem;
    }
`;

export const BannerCard = styled.div`
    background: linear-gradient(145deg, #f0fff0 0%, #ffffff 100%);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(24, 86, 1, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(24, 86, 1, 0.15);
    }

    @media (max-width: 480px) {
        padding: 1.5rem;
    }
`;

export const Title = styled.h3`
    font-size: clamp(1.25rem, 1.5vw, 1.5rem);
    color: #185601;
    margin: 0 0 1rem 0;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid rgba(24, 86, 1, 0.15);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
`;

export const Description = styled.p`
    font-size: clamp(1rem, 1.2vw, 1.1rem);
    color: #4a4a4a;
    line-height: 1.6;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
`;

export const Loader = styled.div`
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
    color: #185601;
    grid-column: 1 / -1;
`;

export const ErrorMessage = styled.div`
    color: #dc3545;
    padding: 2rem;
    text-align: center;
    grid-column: 1 / -1;
    font-family: 'Open Sans', sans-serif;
    background: #ffe6e6;
    border-radius: 8px;
    margin: 1rem;
`;