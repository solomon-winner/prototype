import BannerDesc from "../../molecules/bannerDesc";
import BannerCards from "../../molecules/bannerCards";

const Banner = () => {
    return (
        <div className="banner">
            <BannerDesc/>
            <BannerCards/>
        </div>
    );
}

export default Banner;