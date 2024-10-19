import React from "react";
import { NavBar, NavLinks } from "./navBar";

 const Nav = ({ scrollToSection, homeRef, aboutRef, testimonyRef, songsRef, contactsRef }) => {
    return (
        <NavBar>
            <NavLinks onClick={() => scrollToSection(homeRef)}>Home</NavLinks>
            <NavLinks onClick={() => scrollToSection(aboutRef)}>About</NavLinks>
            <NavLinks onClick={() => scrollToSection(testimonyRef)}>Testimonies</NavLinks>
            <NavLinks onClick={() => scrollToSection(songsRef)}>Songs</NavLinks>
            <NavLinks onClick={() => scrollToSection(contactsRef)}>Contacts</NavLinks>

        </NavBar>
    )
 }

 export default Nav;