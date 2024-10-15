import BannerDesc from "../../molecules/bannerDesc/bannerDesc.jsx";
import BannerCards from "../../molecules/bannerCards/bannerCards.jsx";
import {BannerDiv} from "./banner";

const Banner = () => {
    return (
        <BannerDiv>
            <BannerDesc/>
            <BannerCards/>
        </BannerDiv>    );
}

export default Banner;