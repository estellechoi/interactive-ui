import React, { useRef, useState } from "react"
import styled from "styled-components";
import { useEventListener } from "./../hooks/useEventListener"

const Section = styled.section`
    background-color: #252526;
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
`;

export default function InfiniteScroll() {

    const [datalist, setDatalist] = useState(new Array(50).fill(0));
    const section = useRef();
    
    const fetchData = () => {
        setDatalist((prev) => prev.concat(new Array(10).fill(0)));
    }
    
    const checkScrollY = () => {
        const scrollY = window.scrollY;
        const maxY = section.current.clientHeight - window.innerHeight;

        if (scrollY >= maxY) fetchData();
    }

    useEventListener(window, "scroll", checkScrollY);

    return (
        <Section ref={section}>
            <h2 className="hidden">Infinite Scroll-able View</h2>
            <div className="">
                {datalist.map((item, i) => <div key={i}>{item}</div>)}
            </div>
        </Section>
    );
}