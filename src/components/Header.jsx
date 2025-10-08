import { Link } from 'react-router-dom'
import './Header.css'
import Toolbar from './Toolbar'
export default function Header() {
    return (
        <div className='AppHeader'>
            <Toolbar></Toolbar>
        </div>
    )
}