import './App.css'
import {useEffect, useState} from "react";
import Header from './components/Header'
import CardList from './components/CardList'
import { getEmojis } from './api/emojiApi';
import type { EmojiItem } from './interface/emoji';

function App() {
    const [search, setSearch] = useState('')
    const [emojis, setEmojis] = useState<EmojiItem[]>([])


    useEffect(() => {
        
        const timer = setTimeout(() => {
            getEmojis(search).then((emojis) => setEmojis(emojis))
        }, 500)
        return () => clearTimeout(timer)
    }, [search])

    return (
        <>
            <Header onSearch={setSearch}/>
            <main>
                <CardList items={emojis}/>
            </main>
        </>
    )
}

export default App
