import Card from '../Card'
import type {CardItem} from '../Card'
import styles from './styles.module.css'

function CardList({items}: { items: CardItem[] }) {
    return (
        <div className={styles.cardList}>
            {items.map((item, index) => (
                <Card obj={item} key={index}/>
            ))}
        </div>
    )
}

export default CardList
