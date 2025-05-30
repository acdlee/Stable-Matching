import styles from "./Footer.module.css"
/**
 * A footer that appears at the bottom of the page (inside a flex container).
 * Automated year for copyright.
 * @returns {Component} Footer component.
 */

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className={styles.footer}>
            <p>
                © {year} <a href="https://github.com/acdlee" target="_blank">acdlee</a>. 
                All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer;