/**
 * Represents a blog post written in markdown
 */
import ReactMarkdown from "react-markdown"
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import "./BlogPost.css"
export default function BlogPost ({contents}) {
    return (
        <div className='blogPost'>
            <ReactMarkdown
                children={contents}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
            />
        </div>
    )
}