import './App.css'
import {useEffect, useState} from "react";

function Card({obj}: { obj: { emoji: string, title: string, keywords: string } }) {

    return (
        <div className="card">
            <p className="emoji">
                {obj.emoji}
            </p>
            <p className='title'>{obj.title}</p>
            <p className='keywords'>{obj.keywords}</p>
        </div>
    )
}

function App() {
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState([])

    const data = [{
        emoji: "💯",
        title: "100",
        keywords: "Hundred, points, symbol, wow, win, perfect, parties"
    }, {emoji: "🔢", title: "1234", keywords: "input symbol for numbers symbol"}]


    useEffect(() => {
        setFilteredData(data.filter((obj) => obj.title.includes(search)))
    }, [search])

    return (
        <>
            <header>
                <h1>Emoji finder</h1>
                <p>Find emoji by keywords</p>
                <label htmlFor="">
                    <input type="text" placeholder="palceholder" onChange={(e) => setSearch(e.target.value.trim())}/>
                </label>
            </header>
            <main>
                <div className="cardList">
                    {filteredData.map((item, index) => (
                        <Card obj={item} key={index}/>))}
                </div>

            </main>
        </>
    )
}

export default App
