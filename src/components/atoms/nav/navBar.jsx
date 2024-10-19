import React, { useContext } from "react";
import { NavBar, NavLinks } from "./navBar";
import { scrollContext } from "../../../utils/scrollContext";

 const Nav = () => {
    const { scrollToSection, homeRef, aboutRef, testimonyRef, songsRef, contactsRef } = useContext(scrollContext);
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