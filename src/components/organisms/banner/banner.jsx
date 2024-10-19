import BannerDesc from "../../molecules/bannerDesc/bannerDesc.jsx";
import BannerCards from "../../molecules/bannerCards/bannerCards.jsx";
import {BannerDiv} from "./banner";
import Nav from "../../atoms/nav/navBar.jsx";

const Banner = ({ scrollToSection, homeRef, aboutRef, testimonyRef, songsRef, contactsRef }) => {
    return (
        <BannerDiv>
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