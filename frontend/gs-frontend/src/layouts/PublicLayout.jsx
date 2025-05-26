import Navigation from "./Navigation";

function PublicLayout({ children }) {
    return (
        <>
            <Navigation />
            <main>
                {children}
            </main>
        </>
    );
}

export default PublicLayout;