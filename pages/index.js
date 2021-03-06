import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import RepoCard from '/node_modules/react-repo-card'
import { useWindupString } from 'windups'

const Hello = () => {
    const [text] = useWindupString(
        "It's nice to meet you.",
        { pace : (char) => (char === " " ? 100 : 80), }
    );
    return <div>{text}</div>;
  };

export default function Home() {
    return (
    <div className={styles.page}>
        <Head>
        <title>Projects - Skylar Gilfeather</title>
        <meta name="description" content="Generated by create-next-app."/>
        </Head>
        

        <div className={styles.main}>
            <h1><Hello /></h1>

            <div className={styles.profile}>
                <span className={styles.image}>
                    <Image
                            src="/profile.jpg"
                            height={144}
                            width={144}
                            alt={"Skylar Gilfeather"}
                    />
                </span>
                <span> Hello - I'm Skylar Gilfeather, a programmer based in
                    Boston, MA. 
                </span>
            </div>

            <h2> Experience </h2>
            <div className={styles.textblock}>
                <p> 
                    Currently, I'm a frontend web developer for JumboCode, an
                    organization of students developers which builds software 
                    and websites for local nonprofits. I'm also a TA for the
                    Tufts CS department, and love helping students debug their
                    code (more than I like debugging my own). 
                </p>

                <p>
                    In my free time, I play with new technologies and check out
                    hackathons. My interests include web design, machine
                    learning, and all things cybersecurity - from network
                    security, to cryptography, to IoT hardware security, just
                    to name a few.
                </p>
                <p> 
                    Check out some of my works in progress below: 
                </p>
            </div>
            <h2> Projects </h2>
            <div>
                <div className={styles.repobox}>
                    <span className={styles.repocard}>
                    <RepoCard username="sgilfeather" repository="funngames" />
                    </span>

                    <span className={styles.repocard}>
                    <RepoCard username="sgilfeather" repository="fall2021-data-structs" />
                    </span>

                    <span className={styles.repocard}>
                    <RepoCard username="sgilfeather" repository="letitbe.txt" />
                    </span>

                    <span className={styles.repocard}>
                    <RepoCard username="sgilfeather" repository="about-me" />
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
}
