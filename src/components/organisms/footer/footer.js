import styled, { keyframes } from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: 5%;
  bottom: 0;
  width: 100%;
  height: auto;
  min-height: 250px;
  background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
  color: #fff;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
    padding-bottom: 80px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  padding: 40px 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 40px 20px;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  text-align: center;
  padding: 0 15px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
`;

export const FooterTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 1.3em;
  }
`;

export const FooterText = styled.p`
  font-size: 0.9em;
  line-height: 1.6;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 0.85em;
  }
`;

const waveAnimation = keyframes`
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 1440px;
  }
`;

export const FooterWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="%23ffffff" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  background-size: cover;
  animation: ${waveAnimation} 10s linear infinite;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

export const SocialIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

export const NewsletterInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  flex: 1;
  max-width: 250px;

  @media (max-width: 480px) {
    max-width: 100%;
    border-radius: 5px;
    text-align: center;
  }
`;

export const NewsletterButton = styled.button`
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 480px) {
    border-radius: 5px;
    width: 100%;
  }
`;