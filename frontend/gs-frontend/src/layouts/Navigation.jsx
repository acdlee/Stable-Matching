import { NavLink } from "react-router";

function Navigation() {
    const navLinks = [
        {to: '/', text: 'Home'},
        {to: '/create', text: 'Create'},
        {to: '/demo', text: 'Demo'},
    ]

    return (
        <header>
            <h1>Gale Shapley <br />Preference-Based Matching</h1>
            <nav>
                <ul>
                    {navLinks.map((link) => (
                        <NavLink key={link.text} to={link.to}>{link.text}</NavLink>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;