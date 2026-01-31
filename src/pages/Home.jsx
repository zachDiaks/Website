import { useHref } from 'react-router-dom'
import BlogGrid from '../components/BlogGrid'
import Header from '../components/Header'
import Intro from '../components/Intro'
export default function Home() {
    // Render the component
    return (
        <div className="Home-Page">
            <Header />
            <Intro></Intro>
            <BlogGrid></BlogGrid>
        </div>
    )
}