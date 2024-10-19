import styled from 'styled-components';

export const ContactDiv = styled.div`
    font-family: Arial, sans-serif;
    margin-top: 5%;
    padding: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    width: 85%;
    max-width: 1200px;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const PhotoSide = styled.div`
    flex: 1;
    background-image: url('https://images.unsplash.com/photo-1518707399486-6d702a84ff00');
    background-size: cover;
    background-position: center;
    min-height: 500px;

    @media (max-width: 768px) {
        min-height: 200px;
    }
`;

export const FormSide = styled.div`
    flex: 1;
    padding: 2rem;
`;

export const Title = styled.h3`
    color: green;
    margin-bottom: 1.5rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    margin-top: 1rem;
    font-weight: bold;
    color: green;
`;

export const Input = styled.input`
    margin-top: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
`;

export const Textarea = styled.textarea`
    margin-top: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    height: 150px;
    resize: vertical;
`;

export const Button = styled.button`
    margin-top: 1.5rem;
    padding: 0.75rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #45a049;
    }
`;
export const P = styled.p`
    font-size: 1rem;
    color: green;
    font-style: italic;
`