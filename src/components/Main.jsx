import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Benford from '../pages/Benford'
import Zipf from '../pages/Zipf'
export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/benford" element={<Benford />} />
            <Route path="/zipf" element={<Zipf />} />
        </Routes>
    )
}