import styled from "styled-components";
import { motion } from "framer-motion";

export const Explore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 500px;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    text-align: center;

    h3 {
        font-size: 2.5rem;
        color: #185601;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        line-height: 1.2;
    }

    p {
        font-size: 1.1rem;
        color: #4a4a4a;
        line-height: 1.6;
        font-family: 'Open Sans', sans-serif;
        margin: 0;
    }

    @media (min-width: 768px) {
        h3 { font-size: 3rem; }
        p { font-size: 1.2rem; }
    }
`;

export const ExploreButton = styled(motion.button)`
    background: linear-gradient(135deg, #185601 0%, #2e8b57 100%);
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 1.5rem;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(24, 86, 1, 0.3);
    }

    @media (min-width: 768px) {
        font-size: 1.2rem;
        padding: 1.2rem 2.5rem;
    }
`;