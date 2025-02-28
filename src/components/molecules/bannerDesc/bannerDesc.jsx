import { generalInfoState } from "../../../state/state.js";
import { baseURL } from "../../../utils/constants.js";
import ExploreCard from "../../atoms/exploreCard/exploreCard.jsx";
import { Desc, Image } from "./bannerDesc";
import { useRecoilValue } from "recoil";

const BannerDesc = () => {
    const General = useRecoilValue(generalInfoState);
    return (
        <Desc>
            <ExploreCard/>
            <Image img={`${baseURL}public/${General.bannerPic}`}/>
        </Desc>
    );
};

export default BannerDesc;