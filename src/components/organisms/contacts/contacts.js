// import styled from 'styled-components';
// import Guitar from '../../../assets/guitar.png';

// export const ContactDiv = styled.div`
    // min-height: 10vh;
    // width: 100%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // padding: 4rem 0;
    // background: #f8fff8;

    // @media (max-width: 768px) {
    //     padding: 2rem 0;
    // }
// `;

// export const Container = styled.div`
//     display: flex;
//     width: 90%;
//     max-width: 1200px;
//     background: white;
//     border-radius: 20px;
//     overflow: hidden;
//     box-shadow: 0 10px 30px rgba(24, 86, 1, 0.1);
//     gap: 2rem;

//     @media (max-width: 768px) {
//         flex-direction: column;
//         width: 95%;
//         gap: 0;
//     }
// `;

// export const PhotoSide = styled.div`
//     flex: 1;
//     background-image: url('${Guitar}');
//     background-size: cover;
//     background-position: center;
//     position: relative;
//     min-height: 200px;

//     &::before {
//         content: '';
//         position: absolute;
//         inset: 0;
//         background: linear-gradient(45deg, rgba(24, 86, 1, 0.1) 0%, rgba(255,255,255,0.05) 100%);
//     }

//     @media (max-width: 768px) {
//         min-height: 100px;
//     }
// `;

// export const FormSide = styled.div`
//     flex: 1;
//     padding: 4rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;

//     @media (max-width: 768px) {
//         padding: 2rem;
//     }
// `;

// export const Title = styled.h2`
//     font-size: clamp(2rem, 3vw, 2.5rem);
//     color: #185601;
//     font-family: 'Poppins', sans-serif;
//     font-weight: 700;
//     margin-bottom: 1.5rem;
//     line-height: ;
// `;

// export const Form = styled.form`
//     display: flex;
//     flex-direction: column;
//     gap: 1.5rem;
// `;

// export const Label = styled.label`
//     font-size: 1.1rem;
//     color: #2e8b57;
//     font-family: 'Poppins', sans-serif;
//     font-weight: 600;
// `;

// export const Input = styled.input`
//     padding: 1rem;
//     border: 2px solid #e0f0e0;
//     border-radius: 8px;
//     font-size: 1rem;
//     font-family: 'Open Sans', sans-serif;
//     transition: all 0.3s ease;

//     &:focus {
//         border-color: #185601;
//         outline: none;
//         box-shadow: 0 0 0 3px rgba(24, 86, 1, 0.1);
//     }
// `;

// export const Textarea = styled.textarea`
//     padding: 1rem;
//     border: 2px solid #e0f0e0;
//     border-radius: 8px;
//     font-size: 1rem;
//     font-family: 'Open Sans', sans-serif;
//     height: 150px;
//     resize: vertical;
//     transition: all 0.3s ease;

//     &:focus {
//         border-color: #185601;
//         outline: none;
//         box-shadow: 0 0 0 3px rgba(24, 86, 1, 0.1);
//     }
// `;

// export const Button = styled.button`
//     padding: 1.2rem 2rem;
//     background: #185601;
//     color: white;
//     border: none;
//     border-radius: 50px;
//     font-family: 'Poppins', sans-serif;
//     font-weight: 600;
//     font-size: 1.1rem;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     text-transform: uppercase;
//     letter-spacing: 1px;

//     &:hover {
//         background: #134501;
//         transform: translateY(-2px);
//         box-shadow: 0 5px 15px rgba(24, 86, 1, 0.2);
//     }
// `;

// export const P = styled.p`
//     font-size: 1.1rem;
//     color: #4a4a4a;
//     line-height: 1.8;
//     font-family: 'Open Sans', sans-serif;
//     margin-bottom: 2rem;
// `;



import styled from "styled-components";
import { motion } from "framer-motion";
import Guitar from '../../../assets/guitar.png';

export const ContactWrapper = styled(motion.div)`
    max-width: 1200px;
    margin: 2rem auto;
    padding: 1.5rem;
    min-height: 10vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    background: #f8fff8;

    @media (max-width: 768px) {
        padding: 2rem 0;
    }
`;

export const ContactTitle = styled.h2`
    font-size: clamp(1.8rem, 3vw, 2.2rem);
    color: #185601;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 1.5rem;
    text-align: center;
`;
export const PhotoSide = styled.div`
    flex: 1;
    background-image: url('${Guitar}');
    background-size: cover;
    background-position: center;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, rgba(24, 86, 1, 0.1) 0%, rgba(255,255,255,0.05) 100%);
    }

    @media (max-width: 768px) {
        min-height: 100px;
    }
`;

export const ContactContent = styled.div`
    display: grid;
    gap: 2rem;
    
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
`;

export const ContactInfo = styled.div`
    display: grid;
    gap: 1.5rem;
    font-style: italic;
    font-family: 'Open Sans', sans-serif;
    font-size: clamp(1rem, 2vw, 2rem);
    padding: 1.5rem;
    margin: 1rem;
    background: #f8fff8;
    color:rgb(12, 27, 7);
    border-radius: 12px;
`;

export const InfoItem = styled.div`
    h4 {
        color: #185601;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
    }
    
    p {
        color: #4a4a4a;
        font-family: 'Open Sans', sans-serif;
        line-height: 1.5;
    }
`;

export const ContactForm = styled.form`
    display: grid;
    gap: 1rem;
    padding: 1.5rem;
    background: #f8fff8;
    border-radius: 12px;
`;

export const FormInput = styled.input`
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-family: 'Open Sans', sans-serif;
    
    &:focus {
        outline: 2px solid #185601;
    }
`;

export const FormTextarea = styled.textarea`
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    resize: vertical;
    min-height: 100px;
    font-family: 'Open Sans', sans-serif;
    
    &:focus {
        outline: 2px solid #185601;
    }
`;

export const SubmitButton = styled.button`
    background: #185601;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: background 0.3s ease;
    
    &:hover {
        background: #134501;
    }
`;