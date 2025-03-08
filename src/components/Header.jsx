import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return (
        <div className='AppHeader'>
            <Link to="/" className="header-link"> Home </Link>
            <Link to="/about" className="header-link"> About </Link>
            <Link to="/blog" className='header-link'> Blog </Link>
            <a href="https://www.linkedin.com/in/zachary-diaks/" className='header-link'>
                LinkedIn
            </a>
        </div>
    )
}