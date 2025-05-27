import { useEffect } from "react";
import { NavLink } from "react-router";

import PuzzleIcon from "../../components/svg-puzzle-icon/PuzzleIcon";
import styles from "./Navigation.module.css";

function Navigation() {
    const navLinks = [
        {to: '/', text: 'Home'},
        {to: '/create', text: 'Create'},
        {to: '/demo', text: 'Demo'},
    ];
    
    return (
        <header className={styles.header}>
            <PuzzleIcon />
            <h1>Gale Shapley <br /><span>Preference-Based Matching</span></h1>
            <nav>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.text}>
                            <NavLink to={link.to}>{link.text}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;