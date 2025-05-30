import Footer from "./footer/Footer";
import Navigation from "./header/Navigation";

import styles from './PublicLayout.module.css';

/**
 * Component for the content of the page.
 * Wraps prop 'children' inside the outermost container div.
 * Adds header/footer.
 * @param {jsx or components} children Child jsx/components; page content.
 * @returns {Component} Component for page content.
 */
function PublicLayout({ children }) {
    return (
        <div className={styles.layout}>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default PublicLayout;