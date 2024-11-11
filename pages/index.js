import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import Counter2 from '../components/Counter2'
import Searchbar from '../components/Searchbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Searchbar />

      <h1 className={styles.title}>
          Erik Morgan welcomes <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p>
        For my final project, we will be presenting on DDOS attacks and recursive calls <a href='http://csci331vm.cs.montana.edu/~w17h449/' />
      </p>
      <Counter />
      <Counter2 />
        
    </div>
  );
}
