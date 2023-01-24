import style from './NavBar.module.css';
import { Link } from "react-router-dom";

export function NavBar(){
    return (
        <nav className={style.navbar}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/gitProjects">Git Projects</Link></li>
                <li><Link to="/works">Works</Link></li>
                <li className={style.btn}><Link>Hire me</Link></li>
            </ul>
        </nav>
    );
}