import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Fig = styled.figure`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

const Video = styled.video`
    width: 100%;

    @media screen and (orientation: portrait) {
        height: 100%;
        width: auto;
    }
`;

export default function FirstSection() {

    const video = useRef();

    useEffect(() => {
        video.current.play();
    });

    return (
        <>
            <h3 className="hidden">Video background view</h3>
            <Fig aria-labelledby="video-cap">
                <Video autoplay preload="auto" muted loop ref={video}>
                    <source src="/bg-video.mp4" type="video/mp4" />
                    <div className="hidden">Your browser does not support video play.</div>
                </Video>
                <figcaption id="video-cap" className="hidden">A background video</figcaption>
            </Fig>
        </>
    );
}