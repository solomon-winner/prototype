import styled from "styled-components";

export const NavBar = styled.div`
    max-width: 500px;
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    position: fixed;
    top: 15px;
    left: 70%;
    transform: translateX(-50%);
    border-radius: 10rem; 
    box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
    padding: 0 15px;
    z-index: 1000;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 400px;
        height: 45px;
        top: 10px;
        left: 50%;

    }

    @media (max-width: 480px) {
        max-width: 320px;
        height: 40px;
        top: 5px;
        left: 50%;

    }
`;

export const NavLinks = styled.div`
    color: green;
    padding: 8px 12px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    border-radius: 8px;
    
    &:hover {
        cursor: pointer;
        background-color: #f5f5f5;
    }

    @media (max-width: 768px) {
        font-size: 0.85rem;
        padding: 6px 10px;
        height: 32px;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
        padding: 4px 8px;
        height: 30px;
    }
`;