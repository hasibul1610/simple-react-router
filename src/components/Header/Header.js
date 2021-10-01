import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink
                style={{
                    'textDecoration': 'none',
                    'marginLeft': '10px'
                }}
                to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Home
            </NavLink>
            <NavLink
                style={{
                    'textDecoration': 'none',
                    'marginLeft': '10px'
                }}
                to="/friends"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Friends
            </NavLink>
            <NavLink
                style={{
                    'textDecoration': 'none',
                    'marginLeft': '10px'
                }}
                to="/about"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                About
            </NavLink>

        </div>
    );
};

export default Header;