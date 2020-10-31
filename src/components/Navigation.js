import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
`;

const MenuText = styled.span`
    padding: 5px 5px;
    font-weight: 900;
    transition: color 0.4s;

    &:hover {
        color: #000;
    }
`;


export default function Navigation({ menu }) {
    return (
        <Nav>
            {menu.map((item, i) => (
                <MenuText key={i}>
                    <Link to={item.path}>{item.name}</Link>
                </MenuText>
            ))}
        </Nav>
    );
    
}

Navigation.defaultProps = {
    menu: [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Scroll Progress",
            path: "/scroll-progress"
        },
        {
            name: "Infinite Scroll",
            path: "/infinite-scroll"
        },
    ]
}