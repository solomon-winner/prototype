import BannerDesc from "../../molecules/bannerDesc";
import BannerCards from "../../molecules/bannerCards";
import {BannerDiv} from "./banner";

const Banner = () => {
    return (
        <BannerDiv>
            <BannerDesc/>
            <BannerCards/>
        </BannerDiv>    );
}

export default Banner;