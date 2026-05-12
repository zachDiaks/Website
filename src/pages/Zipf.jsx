import BlogPost from '../components/BlogPost'
import Header from '../components/Header'

export default function Zipf() {
    const markdownString = `
# Power Laws and Web Scraping 2 - Zipf's Law
---
Coming soon! Finishing up the analysis for this one.

![Zipf Result](https://raw.githubusercontent.com/zachDiaks/mw-benfords-law/main/ZipfResult.png)
`
    return (
        <div>
            <Header />
            <BlogPost contents={markdownString}/>
        </div>
    )
}