import styled from "styled-components";

export const SongWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 5%;
    text-align: start;
`;
export const CardTitle = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: green;
    width: 100%;
    margin-bottom: 10px;
    padding-left: 2%;
    padding-bottom: 2%;

`;
export const SongDiv = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content:start;
    align-items: center;
    gap: 30px;
    max-width: 100vw;
    box-sizing: border-box;
`
export const SongCard = styled.div`
    width: 30rem;
    height: fit-content;
    padding: 20px;
    display: flex;
    gap: 2%;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);

`
export const SongCardLeft = styled.div`
    width: 40%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    box-sizing: border-box;
`
export const SongCardRight = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    box-sizing: border-box;
`
export const Image = styled.div`
    width: 100%;
    height: 80%;
    background-color: white;
    background-image: url("${(props) => props.img}");
    background-size: cover;
    background-position: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    box-sizing: border-box;
    border: 1px solid green;

`;

export const SongButton = styled.button`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: green;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    &:hover {
        background-color: darkgreen;
    }
`
export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: green;
    width: 100%;
    margin-bottom: 10px;
`
export const SongTitle = styled.p`
    color: green;
    width: 100%;
    margin: 0;
    padding: 5px;
    box-sizing: border-box;
`
export const PlaySong = styled.button`
    width: 100%;
    max-width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: white;
    color: green;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid green;
    box-sizing: border-box;
    margin-top: 10px;
    &:hover {
        color: white;
        background-color: darkgreen;
    }
`
export const SeeMore = styled.button`
    width: 150px;
    height: 2rem;
    display: flex;
    align-self: end;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-top: 30px;
    margin-right: 60px;
    color: green;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid green;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
    &:hover {
        color: white;
        background-color: darkgreen;
    }
`
export const SingleSong = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
    background-color: white;
`
export const SongImage = styled.div`
    width: 100%;
    height: 90%;
    background-color: white;
    background-image: url("${(props) => props.img}");
    background-size: cover;
    background-position: center;
    box-sizing: border-box;

`
export const SongDetails = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    padding-left: 20px;
    flex-direction: column;
    gap: 5px;
    box-sizing: border-box;
`
export const SongName = styled.p`
    color: green;
    font-size: 1.2rem;
    margin: 0;
    padding: 5px;
    box-sizing: border-box;

`
