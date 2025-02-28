import { useContext } from "react";
import { CardTitle, Image, PlaySong, SongButton, SongCard, SongCardLeft, SongCardRight, SongDiv, SongTitle, SongWrapper, Title, SeeMore, SingleSong, SongImage, SongDetails, SongName } from "./songCards";
import { FaSpotify, FaApple, FaAmazon, FaYoutube } from "react-icons/fa";
import { scrollContext } from "../../../utils/scrollContext";
import { useRecoilValue } from "recoil";
import { albumsState, songsState } from "../../../state/state";
import { useSongs } from "../../../hooks/useSongs";
import { baseURL } from "../../../utils/constants";

const Songs = () => {
    const { songsRef } = useContext(scrollContext);
    const { isLoading: isSongLoading, isError: songError } = useSongs("song");
const { isLoading: isAlbumLoading, isError: albumError } = useSongs("album");
    const Songs = useRecoilValue(songsState);
    const Albums = useRecoilValue(albumsState);

    console.log("Songs",Songs, "Albums",Albums);
    return (
        <SongWrapper ref = {songsRef}>
            <CardTitle>Albums</CardTitle>
        <SongDiv>

            {Albums.map((album) => (
                <SongCard>
                    <SongCardLeft>

                    <Image img={`${baseURL}public/${album.img}`}/>
                    <SongButton><FaApple/>Buy on Apple Music</SongButton>
                    <SongButton><FaSpotify/>Listen on spotify</SongButton>
                    <SongButton><FaAmazon/>Buy on Amazon</SongButton>
                    <SongButton><FaYoutube/>Watch on YouTube</SongButton>
                </SongCardLeft>
                <SongCardRight>
                    <Title>{album.title}</Title>
                    {album.songs.map((song) => (
                        <SongTitle>{song}</SongTitle>
                    ))}

                    <PlaySong><FaYoutube/>Play the song</PlaySong>

                </SongCardRight>
                </SongCard>
            ))}
        </SongDiv>

        <SeeMore>See More Albums</SeeMore>
        <CardTitle>Single Release</CardTitle>

        <SongDiv>
            {Songs.map((song) => (
                <SingleSong>
                    <SongImage img={`${baseURL}public/${song.img}`}/>
                    <SongDetails>
                        <SongName>{song.title}</SongName>
                    </SongDetails>
                    <PlaySong><FaYoutube/>Play the song</PlaySong>
                </SingleSong>
            ))}

        </SongDiv>
        <SeeMore>See More Songs</SeeMore>

        </SongWrapper>
    )
}

export default Songs;