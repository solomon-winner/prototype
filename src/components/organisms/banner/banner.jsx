import BannerDesc from "../../molecules/bannerDesc";
import BannerCards from "../../molecules/bannerCards";
import {Banner} from "./banner";

const Banner = () => {
    return (
        <Banner>
            <BannerDesc/>
            <BannerCards/>
        </Banner>
    );
}

export default Banner;