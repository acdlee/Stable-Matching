import Footer from "./footer/Footer";
import Navigation from "./header/Navigation";

function PublicLayout({ children }) {
    return (
        <>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default PublicLayout;