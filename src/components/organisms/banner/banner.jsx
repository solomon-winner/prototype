import BannerDesc from "../../molecules/bannerDesc/bannerDesc.jsx";
import BannerCards from "../../molecules/bannerCards/bannerCards.jsx";
import {BannerDiv} from "./banner";
import Nav from "../../atoms/nav/navBar.jsx";

const Banner = () => {
    return (
        <BannerDiv>
            <Nav/>
            <BannerDesc/>
            <BannerCards/>
        </BannerDiv> 
        );
}

export default Banner;