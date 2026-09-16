import styles from './styles.module.css'

type HeaderProps = {
    onSearch: (value: string) => void
}

function Header({onSearch}: HeaderProps) {
    return (
        <header className={styles.header}>
            <h1>Emoji finder</h1>
            <p>Find emoji by keywords</p>
            <label>
                <input
                    type="text"
                    placeholder="palceholder"
                    onChange={(e) => onSearch(e.target.value.trim())}
                />
            </label>
        </header>
    )
}

export default Header
