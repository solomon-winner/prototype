import BannerDesc from "../../molecules/bannerDesc/bannerDesc";
import BannerCards from "../../molecules/bannerCards/bannerCards";
import {BannerDiv} from "./banner";

const Banner = () => {
    return (
        <BannerDiv>
            <BannerDesc/>
            <BannerCards/>
        </BannerDiv>    );
}

export default Banner;