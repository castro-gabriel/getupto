import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChanllegeBox } from "../components/ChangelleBox";

import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return(
    <div className={styles.container}>
      <Head>
        <title>Home | GetUpTo</title>
      </Head>

      <ExperienceBar/>  

      <section>
        <div >
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
          <ChanllegeBox />
        </div>
      </section>
    </div>
  );
}