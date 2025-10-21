import Header from '../components/Header'
export default function Home() {
    // Render the component
    return (
        <div className="Home-Page">
            <Header />
            <h1>
                Welcome! I'm Zach.
            </h1>
            <img
                src={require('../resources/ZachProfPic.jpg')}
                alt="Zach"
                style={{ width: 500, height: 500 }}
            />
            <p>
                This site is mostly for my personal blog, but it also serves as a personal playground for me to learn a little bit about web development.
            </p>
        </div>
    )
}