import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    )
}