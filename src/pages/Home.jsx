import { useEffect, useState } from 'react'
import Header from '../components/Header'
export default function Home() {
    // Fetch about text
    const [aboutText, setAboutText] = useState()
    useEffect(() => {
        async function fetchData() {
            const txt = await readContents('../public/About.txt')
            console.log(txt)
            setAboutText(txt)
        }
        fetchData()
    }, [])

    // Render the component
    return (
        <div className="App-header">
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
                {aboutText}
            </p>
        </div>
    )
}
async function readContents(file) {
    const response = await fetch(file)
    const text = await response.text()
    return text
}