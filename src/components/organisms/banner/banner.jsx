import BannerDesc from "../../molecules/bannerDesc/bannerDesc.jsx";
import BannerCards from "../../molecules/bannerCards/bannerCards.jsx";
import {BannerDiv} from "./banner";
import Nav from "../../atoms/nav/navBar.jsx";
import { useContext } from "react";
import { scrollContext } from "../../../utils/scrollContext.js";
import { useRecoilValue } from "recoil";
import { generalInfoState } from "../../../state/state.js";

const Banner = () => {
    const { scrollToSection, homeRef, aboutRef, testimonyRef, songsRef, contactsRef } = useContext(scrollContext);
        const General = useRecoilValue(generalInfoState);
        console.log("General",General)
    return (
        <BannerDiv ref={homeRef}>
      <Nav
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        testimonyRef={testimonyRef}
        songsRef={songsRef}
        contactsRef={contactsRef}
      />
        <BannerDesc/>
         <BannerCards/>
        </BannerDiv> 
        );
}

export default Banner;