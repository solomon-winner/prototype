import { useRecoilValue } from "recoil";
import { Explore, ExploreButton } from "./exploreCard";
import { generalInfoState } from "../../../state/state";

const ExploreCard = () => {
            const General = useRecoilValue(generalInfoState);
            console.log("General",General)
    return (
        <>
        <Explore>
         <h3>{General.title}</h3>

         <p>
            {General.bannerInfo}
         </p>
         <ExploreButton>Explore More</ExploreButton>
        </Explore>
        </>
    );
}

export default ExploreCard;