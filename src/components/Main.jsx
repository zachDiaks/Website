import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Blog from '../pages/WhoAmI'
export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whoami" element={<Blog />} />
        </Routes>
    )
}