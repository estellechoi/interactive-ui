import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    width: 200px;
`;


export default function SecondSection() {
    return (
        <>
            <Container>
                <h2 className="hidden">Parallax animation view</h2>
                <Img src="./pop1.png" alt="Screenshot of the main wall video no.1"/>
                <Img src="./pop2.png" alt="Screenshot of the main wall video no.2"/>
                <Img src="./pop3.png" alt="Screenshot of the main wall video no.3"/>
            </Container>
        </>
    );
}