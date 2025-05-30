import { NavLink } from "react-router";
import Article from "../../components/article/Article";

import styles from "./Home.module.css"

/**
 * Creates the Home page content rendered inside 'main' (see PublicLayout.jsx).
 * Holds all text/img content for the page.
 * @returns {Component} Home page component.
 */
function Home() {
    return (
        <>
            <section className={styles.section}>
                <h2>The Stable Matching Problem</h2>
                <Article title={"About the Algorithm"}>
                    <p>
                        The Gale Shapley algorithm finds a solution
                        to the stable matching problem.
                    </p>
                    <p> 
                        Named after David Gale and Lloyd
                        Shapley (
                        <a 
                            href="https://wayback.archive-it.org/5456/20240920170021/http://www.eecs.harvard.edu/cs286r/courses/fall09/papers/galeshapley.pdf"
                            target="_blank"
                        >
                            published in 1962
                        </a>
                        ), this algorithm seeks to pair up two
                        groups based on their preferences.
                    </p>
                </Article>
                <Article title={"Real World Applications"}>
                    <p>
                        Algorithms for finding solutions to the stable matching problem
                         have varied real-world application: 
                    </p>
                    <ul>
                        <li>
                            Assigning graduating medical students to their first
                            hospital appointment
                        </li>
                        <li>
                            Assigning users to servers, where users have proximal preferences
                            and servers cost-based preferences
                        </li>
                        <li>Assigning students to Universities in France</li>
                    </ul>
                </Article>
                <Article title={"On this Site"}>
                    <ul>
                        <li>
                            Visit the <NavLink to={'/demo'}>Demo</NavLink> page
                            for a quick demonstration and algorithm analysis.
                        </li>
                        <li>
                            Create an account and visit 
                            the <NavLink to={'/create'}>Create</NavLink> page 
                            for personal use.
                        </li>
                    </ul>
                </Article>
            </section>
        </>
    );
}

export default Home;