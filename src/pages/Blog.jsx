/**
 * Main blog page
 */
import Header from '../components/Header'
import BlogPost from '../components/BlogPost'

export default function Blog() {
const markdownString = `
# Header 1 
${'```'}
x = 1;
y = 100;
z = 10000;
${'```'}
Next line
> Is this a quote?

Goodbye
`
    return (
        <div>
            <Header />
            <BlogPost contents={markdownString}/>
        </div>
    )
}