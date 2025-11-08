import Header from '../components/Header'
import Blog from './WhoAmI'
export default function Home() {
    // Render the component
    return (
        <div className="Home-Page">
            <Header />
            <h1>
                Welcome!
            </h1>
            <img
                src={require('../resources/ZachProfPic.jpg')}
                alt="Zach"
                style={{ width: 500, height: 500 }}
            />
            <Blog useHeader={false}/>
        </div>
    )
}