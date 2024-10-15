export const theme = {
    primaryColor: '#4CAF50',
    secondaryColor: '#f44336'
  };

  const Buttons = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Button = styled.button`
  background-color: ${props => props.primary ? "#4CAF50" : "#f44336"};
  color: white;
  padding: 15px 32px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  
  &:hover {
    background-color: ${props => props.primary ? "#45a049" : "#d32f2f"};
  }
`;