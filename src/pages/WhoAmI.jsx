/**
 * Main blog page
 */
import Header from '../components/Header'
import BlogPost from '../components/BlogPost'

export default function Blog() {
const markdownString = `
# Who am I?
___
Hi friends! Welcome to my personal blog. My name is Zach, and I made this blog as an excuse to write about things that I find interesting. It could be some random math thing that I read about, one of my hobbies like Super Smash Brothers (Melee) or Hockey, or just something I've been thinking about lately.

I'm also using this blog/website as an excuse to learn a little bit about web development. In my professional career thus far, I've avoided webdev like the plague. But in the moments where I needed to know a thing or two... I wish I took the time to learn.

And as you might have picked up on, I don't think I'm a particularly good writer. Maybe this will help! I don't really expect anyone to read this, but it'd be cool to have a little internet archive that captures a snapshot of my life.

So if you do end up reading this, thank you! I hope it's entertaining to someone other than me. But if not ¯\\\\_(ツ)_/¯
`
    return (
        <div>
            <Header />
            <BlogPost contents={markdownString}/>
        </div>
    )
}