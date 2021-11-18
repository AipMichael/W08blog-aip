import styles from "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className={styles.headerBar}>
        <h1 className={styles.title}>Next2You</h1>
        <div className={styles.headerMenu}>
          <Link href="/" cllinkssName={styles.headRoutes}>
            Home
          </Link>
          <Link href="/newpost" cllinkssName={styles.headRoutes}>
            New Post
          </Link>
        </div>
      </header>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <p>Powered by{" you"} </p>
      </footer>
    </>
  );
}

export default MyApp;
