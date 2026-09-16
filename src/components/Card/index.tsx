import styles from './styles.module.css'

export type CardItem = {
    emoji: string
    title: string
    keywords: string
}

function Card({obj}: { obj: CardItem }) {
    return (
        <div className={styles.card}>
            <p className={styles.emoji}>
                {obj.emoji}
            </p>
            <p className={styles.title}>{obj.title}</p>
            <p className={styles.keywords}>{obj.keywords}</p>
        </div>
    )
}

export default Card
