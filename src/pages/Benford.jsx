import BlogPost from '../components/BlogPost'
import Header from '../components/Header'

export default function Benford() {
    const markdownString = `
# Using power laws as an excuse to learn web scraping
___
To do: This blog post will have information about using web scraping to evaluate benford's zipf's law for MATLAB documentation pages.

## Setting up the experiment

## Results
`
    return (
        <div>
            <Header />
            <BlogPost contents={markdownString}/>
        </div>
    )
}