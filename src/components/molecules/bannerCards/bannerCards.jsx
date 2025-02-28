import { useRecoilValue } from "recoil";
import { useBannerCards } from "../../../hooks/useBannerCards";
import { BannerCard, CardWrapper, Description, Title } from "./bannerCards";
import { cardInfoState } from "../../../state/state";

const BannerCards = () => {
      const { isLoading, error } = useBannerCards();
     const CardInfo = useRecoilValue(cardInfoState);
    console.log("CardInfo",CardInfo)
    return (
        <CardWrapper>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {CardInfo.map((card) => (
                <BannerCard key={card.id}>
                    <Title>{card.title}</Title>
                    <Description>{card.description}</Description>
                </BannerCard>
            ))}
        </CardWrapper>
    );
};

export default BannerCards;