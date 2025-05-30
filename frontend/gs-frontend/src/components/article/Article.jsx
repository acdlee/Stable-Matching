import styles from "./Article.module.css"
/**
 * Component wrapper around <article>. Adds card styling.
 * @param {string} title The article heading.
 * @param {Component} children JSX belonging inside the article. 
 * @returns {Component} An article component.
 */

function Article({ title, children }) {
    return (
        <article className={styles.article}>
            <h3>{title}</h3>
            {children}
        </article>
    );
}

export default Article;