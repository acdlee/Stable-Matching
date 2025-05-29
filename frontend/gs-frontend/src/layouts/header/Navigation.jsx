import { useEffect } from "react";
import { NavLink } from "react-router";
import { MdAccountCircle } from "react-icons/md";

import styles from "./Navigation.module.css";

function Navigation() {
    const navLinks = [
        {to: '/', text: 'Home'},
        {to: '/create', text: 'Create'},
        {to: '/demo', text: 'Demo'},
    ];

    function sayHi() {
        console.log("hi")
    }
    
    return (
        <header className={styles.header}>
            <h1>Gale Shapley <span>Preference-Based Matching</span></h1>
            <div>
                <nav>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.text}>
                                <NavLink to={link.to}>{link.text}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <MdAccountCircle className={styles.accountIcon} onClick={sayHi} />
            </div>

        </header>
    );
}

export default Navigation;