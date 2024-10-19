import React, {createContext, useRef } from 'react';

const scrollContext = createContext();

const ScrollProvider = ({children}) => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const testimonyRef = useRef(null);
    const songsRef = useRef(null);
    const contactsRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <scrollContext.Provider value = {{homeRef, aboutRef, testimonyRef, songsRef, contactsRef, scrollToSection}}>
            {children}
        </scrollContext.Provider>
    )
}