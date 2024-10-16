import styled from "styled-components";

export const NavBar = styled.div`
    width: 500px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    position: fixed;
    top: 15px;
    right: 10%;
    border-radius: 10rem; 
    box-shadow: 0 3px 5px rgb( 0 0 0 / 0.2)
`
export const NavLinks = styled.div`
    color: green;
    width: 80px;
    height:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
    cursor: pointer;
    }
`