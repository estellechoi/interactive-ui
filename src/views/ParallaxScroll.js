import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import FirstSection from "./parallax-scroll/FirstSection";
import SecondSection from "./parallax-scroll/SecondSection";
import { useEventListener } from "./../hooks/useEventListener"
import { useIntersectionObserver } from "./../hooks/useIntersectionObserver"


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
    transition: all 0.4s;

    &:nth-of-type(2) {
        z-index: 1;
        box-shadow: 0 2px 20px 8px rgba(0,0,0,0.3), 
                    0 -10px 20px 8px rgba(0,0,0,0.5);
    }

    &.white-bg {
        background-color: rgba(255, 255, 255, 1);
    }

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
    const firstSection = useRef();
    const thirdSection = useRef();

    const [isScrolling, setIsScrolling] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [is3rdActive, setIs3rdActive] = useState(false);
    const secTop = useRef(0);
    const secHeight = useRef(0);
    const secBottom = useRef(0);

    // let secTop;
    // let secHeight;
    // let secBottom;

    const detectScrolling = (isPrevActive) => {
        const secOffsetTop = firstSection.current.getBoundingClientRect().top;

        if (isPrevActive && Math.abs(secOffsetTop) >= secHeight)
            setIsScrolling(false);
        else if (!isPrevActive && secOffsetTop === secTop)
            setIsScrolling(false);
        else
            window.requestAnimationFrame(() => detectScrolling(isPrevActive));
    }

    const turnSection = () => {
        const isPrevActive = isActive;

        window.scroll({
            top: isPrevActive ? secBottom : secTop,
            behavior: 'smooth'
        });
        window.requestAnimationFrame(() => detectScrolling(isPrevActive));    
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
        secTop.current = firstSection.current.offsetTop;
        secHeight.current = firstSection.current.clientHeight;
        secBottom.current = secTop + secHeight;
    });

    useEventListener(window, "scroll", checkSectionEntry);
    useIntersectionObserver([
        {
            el: thirdSection,
            handler: () => {
                if (!is3rdActive) setIs3rdActive(true);
            },
            antiHandler: () => {
                if (is3rdActive) setIs3rdActive(false);
            }
        }
    ], { threshold: 0.4 });

    return (
        <Section>
            <h2 className="hidden">Page-like Scrolling and Parallax Scroll-able View</h2>
            <SubSection ref={firstSection} className={`${isActive ? '' : 'inactivated'}`}>
                <FirstSection/>
            </SubSection>
            <SubSection>
                <SecondSection/>
            </SubSection>
            <SubSection ref={thirdSection} className={`${is3rdActive ? 'white-bg' : ''}`}>
                3rd
            </SubSection>
            <SubSection>
                4th
            </SubSection>
        </Section>
    );
}