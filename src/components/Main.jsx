import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Benford from '../pages/Benford'
export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/benford" element={<Benford />} />
        </Routes>
    )
}