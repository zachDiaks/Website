import { useHref } from 'react-router-dom'
import BlogGrid from '../components/BlogGrid'
import Header from '../components/Header'
import Blog from './WhoAmI'
export default function Home() {
    // Render the component
    return (
        <div className="Home-Page">
            <Header />
            <Blog useHeader={false}></Blog>
            <BlogGrid></BlogGrid>
        </div>
    )
}