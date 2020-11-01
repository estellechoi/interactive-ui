import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import FirstSection from "./parallax-scroll/FirstSection";
import { useEventListener } from "./../hooks/useEventListener"

const Section = styled.section`
    background-color: #252526;
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
`;

const SubSection = styled.section`
    position: relative;
    height: 100vh;
    overflow: hidden;
    background-color: #000;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 0.4s;
    }

    &.inactivated::after {
        background-color: rgba(0, 0, 0, 1);
    }

`;


export default function ParallaxScroll() {
    const section = useRef();
    const [isScrolling, setIsScrolling] = useState(false);
    const [isActive, setIsActive] = useState(true);

    let secTop;
    let secHeight;
    let secBottom;

    const checkIsScrolling = (isPrevActive) => {
        const secOffsetTop = section.current.getBoundingClientRect().top;

        if (isPrevActive && Math.abs(secOffsetTop) >= secHeight)
            setIsScrolling(false);
        else if (!isPrevActive && secOffsetTop === secTop)
            setIsScrolling(false);
        else
            window.requestAnimationFrame(() => checkIsScrolling(isPrevActive));
    }

    const turnSection = () => {
        const isPrevActive = isActive;

        window.scroll({
            top: isPrevActive ? secBottom : secTop,
            behavior: 'smooth'
        });
        window.requestAnimationFrame(() => checkIsScrolling(isPrevActive));    
        setIsActive(!isPrevActive);
    }
    
    const checkSectionEntry = () => {
        const currentY = window.scrollY;
        if (currentY > secTop && currentY < secBottom) {
            if (!isScrolling) {
                setIsScrolling(true);
                turnSection();
            }
        }

    }

    useEffect(() => {
        secTop = section.current.offsetTop;
        secHeight = section.current.clientHeight;
        secBottom = secTop + secHeight;
    });

    useEventListener(window, "scroll", checkSectionEntry);

    return (
        <Section>
            <h2 className="hidden">Page-like Scrolling and Parallax Scroll-able View</h2>
            <SubSection ref={section} className={`${isActive ? '' : 'inactivated'}`}>
                <FirstSection/>
            </SubSection>
            <SubSection>
                Hello 2nd
            </SubSection>
            <SubSection>
                Hello 3rd
            </SubSection>
            <SubSection>
                Hello 4th
            </SubSection>
        </Section>
    );
}