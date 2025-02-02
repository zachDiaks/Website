import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className='Header'>
            <header>
                <Link to="/" style={{color:'aquamarine'}}> Home </Link>
                <Link to="/about" style={{color:'aquamarine'}}> About </Link>
                <a href="https://www.linkedin.com/in/zachary-diaks/" style={{color:'aquamarine'}}>
                    LinkedIn
                </a>
            </header>
        </div>
    )
}