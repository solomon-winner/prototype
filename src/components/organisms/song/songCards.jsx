import { Image, SongButton, SongCard, SongCardLeft, SongCardRight, SongDiv, SongTitle, Title } from "./songCards";
import { FaSpotify, FaApple, FaAmazon, FaYoutube } from "react-icons/fa";

const Songs = () => {
    return (
        <SongDiv>
            <SongCard>
                <SongCardLeft></SongCardLeft>
                <SongCardRight></SongCardRight>
            </SongCard>
            <SongCard>
                <SongCardLeft>
                    <Image img="../../assets/CEO_no_bg.png" />
                    <SongButton><FaApple/>Buy on Apple Music</SongButton>
                    <SongButton><FaSpotify/>Listen on spotify</SongButton>
                    <SongButton><FaAmazon/>Buy on Amazon</SongButton>
                    <SongButton><FaYoutube/>Watch on YouTube</SongButton>
                </SongCardLeft>
                <SongCardRight>
                    <Title>Balewletaye (ባለውለታየ)</Title>
                    <SongTitle>1. Wletew Bezabgn</SongTitle>
                    <SongTitle>2. Zariem hyaw new</SongTitle>
                    <SongTitle>3. Abetu endante Manew</SongTitle>
                    <SongTitle>4. Balewletaye Eyesus</SongTitle>
                    <SongTitle>5. Bante Des Ylegnal</SongTitle>
                    <SongTitle>6. Gashaye new ersu</SongTitle>
                    <SongTitle>7. Halieluya</SongTitle>
                    <SongTitle>8. Bemaleda</SongTitle>
                    <SongTitle>9. Lamesgnew</SongTitle>
                    <SongTitle>10. Bietekrstian</SongTitle>
                    <SongTitle>11. Yesus Selamie new</SongTitle>
                    <SongTitle>12. Wletew Bezabgn</SongTitle>
                    <SongTitle>13. Eski Meskelh sr</SongTitle>

                </SongCardRight>
            </SongCard>
        </SongDiv>
    )
}

export default Songs;