import styles from "./Article.module.css"

function Article({ title, children }) {
    return (
        <article className={styles.article}>
            <h3>{title}</h3>
            {children}
        </article>
    );
}

export default Article;