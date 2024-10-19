import styled, { keyframes } from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: 5%;
  bottom: 0;
  width: 100%;
  height: 250px;
  background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
  color: #fff;
  overflow: hidden;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 20px;
  position: relative;
  z-index: 2;
`;

export const FooterSection = styled.div`
  flex: 1;
  text-align: center;
`;

export const FooterTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 15px;
`;

export const FooterText = styled.p`
  font-size: 0.9em;
  line-height: 1.6;
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
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
`;

export const SocialIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const NewsletterInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
`;

export const NewsletterButton = styled.button`
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;