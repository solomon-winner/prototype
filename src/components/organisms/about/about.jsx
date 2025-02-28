import { useContext } from "react";
import { scrollContext } from "../../../utils/scrollContext";
import { AboutDiv, AboutImage, AboutText } from "./about";
import { useRecoilValue } from "recoil";
import { generalInfoState } from "../../../state/state";
import {baseURL} from "../../../utils/constants";

const About = () => {
    const { aboutRef } = useContext(scrollContext);
            const General = useRecoilValue(generalInfoState);
    return (
        <AboutDiv ref={aboutRef}>
            <AboutImage img={`${baseURL}public/${General.aboutPic}`}></AboutImage>
            <AboutText>
                <h3>About </h3>
                <p>{General.aboutInfo}</p>
            </AboutText>
        </AboutDiv>
    )
}

export default About;