import Footer from "./footer/Footer";
import Navigation from "./header/Navigation";

import styles from './PublicLayout.module.css';

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