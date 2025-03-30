/**
 * Represents a blog post written in markdown
 */
import Markdown from "react-markdown"
import "./BlogPost.css"
export default function BlogPost ({contents}) {
    return (
        <div className='blogPost'>
            <Markdown>{contents}</Markdown>
        </div>
    )
}