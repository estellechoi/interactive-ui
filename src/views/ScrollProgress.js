import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useEventListener } from "./../hooks/useEventListener"

const Section = styled.section`
    background-color: #252526;
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
`;

const ProgressArea = styled.div`
    position: fixed;
    top: calc(50vh - 40px);
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ProgressBox = styled.div`
    width: 70%;
    height: 80px;
    border: 2px solid #fff;
    border-radius: 10px;
    position: relative;
    box-shadow: 2px 2px 20px 2px rgba(255, 255, 255, 0.3);
`;

const ProgressBar = styled.div`
    position: absolute;
    height: 100%;
    width: 0%;
    background-color: #fff;
    border-radius: 0;
`;

const ProgressBoxSkin = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height :100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProgressBoxText = styled.span`
    position: absolute;
    top: -60px;
    color: #fff;
    font-size: 2rem;
    font-weight: 900;
`;


export default function ScrollProgress() {

    const [ratio, setRatio] = useState(0);
    const section = useRef();

    const getRatio = () => {
        const totalHeight = section.current.offsetHeight; // height of an el including its border width.
        const scrollHeight = totalHeight - window.innerHeight; // the real height to be scrolled.
        const scrollY = window.scrollY; // how many pixels el's scrolled from the top.
        const scrolledRatio = Math.ceil(scrollY / scrollHeight * 100);

        setRatio(scrolledRatio > 100 ? 100 : scrolledRatio);
    }

    useEventListener(window, "scroll", getRatio);

    return (
        <Section ref={section}>
            <h2 className="hidden">Scroll Progress Bar</h2>
            <div className="">
                <ProgressArea>
                    <ProgressBox>
                        <ProgressBar style={{width: `${ratio}%`, borderRadius: `${ratio ? 7 : 0}px`}}/>

                        <ProgressBoxSkin>
                            <ProgressBoxText>
                               {ratio} %
                            </ProgressBoxText>
                        </ProgressBoxSkin>
                    </ProgressBox>
                </ProgressArea>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a <br/>
                a
            </div>
        </Section>
    );
}