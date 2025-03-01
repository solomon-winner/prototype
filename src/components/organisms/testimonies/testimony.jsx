import { useContext } from "react";
import { TestifierName, Testimonial, TestimonyCards, TestimonyDiv, Title } from "./testimony";
import { scrollContext } from "../../../utils/scrollContext";
import { useRecoilValue } from "recoil";
import { testimoniesState } from "../../../state/state.js";

const Testimony = () => {
    const { testimonyRef } = useContext(scrollContext);
    const Testimonies = useRecoilValue(testimoniesState);
    return (
        <TestimonyDiv ref={testimonyRef}>
            <Title>Testimonies</Title>
            {Testimonies.map((testimony) => 
                   <TestimonyCards>
                <TestifierName>
                    {testimony?.testifierName}
                </TestifierName>
                <Testimonial>
                   {testimony.testimony}
                </Testimonial>
            </TestimonyCards>     
            )}


        </TestimonyDiv>
    )
}

export default Testimony;