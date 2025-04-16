import '../styles/navbar.css'
import react_logo from '../assets/react-logo.png';

export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={ react_logo } alt="react logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}