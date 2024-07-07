import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import './menu.css'
import {ElementContext} from "../../index";

const Menu = () => {
    const {_, setElementCount} = useContext(ElementContext);
    const resetCounter = ()=> {
        setElementCount(0)
    }
    return (
        <ul className={"horizontal-list"}>
            <li onClick={resetCounter}>
                <Link to="/">Main</Link>
            </li>
            <li onClick={resetCounter}>
                <Link to="/short/">Short</Link>
            </li>
            <li onClick={resetCounter}>
                <Link to="/long/">Long</Link>
            </li>
        </ul>
    );
};

export default Menu;