import { useRecoilValue } from "recoil";
import { useBannerCards } from "../../../hooks/useBannerCards";
import { BannerCard, CardWrapper, Description, Title, Loader, ErrorMessage } from "./bannerCards";
import { cardInfoState } from "../../../state/state";

const BannerCards = () => {
      const { isLoading, error } = useBannerCards();
     const CardInfo = useRecoilValue(cardInfoState);
    return (
        <CardWrapper>
                     {isLoading && <Loader>🌀 Loading...</Loader>}
                     {error && <ErrorMessage>⚠️ {error.message}</ErrorMessage>}
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