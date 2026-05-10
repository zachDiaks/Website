/**
 * Represents a blog post written in markdown
 */
import ReactMarkdown from "react-markdown"
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from "remark-gfm";
import 'katex/dist/katex.min.css'

import "./BlogPost.css"
export default function BlogPost ({contents}) {
    return (
        <div className='blogPost'>
            <ReactMarkdown
                children={contents}
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
            />
        </div>
    )
}