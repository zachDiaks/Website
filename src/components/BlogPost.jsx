/**
 * Represents a blog post written in markdown
 */
import Markdown from "react-markdown"
export default function BlogPost ({contents}) {
    return (
        <div>
            <Markdown>{contents}</Markdown>
        </div>
    )
}