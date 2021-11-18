import styles from "../styles/Home.module.css";

export default function Home({ news }) {
  console.log("hi");
  return (
    <>
      <h1 className={styles.title}>These are the newest entries:</h1>
      <ul>
        {news.map(({ title }) => (
          <li key={news.id}>{title}</li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://isdi-blog-posts-api.herokuapp.com/posts`);
  const news = await res.json();

  return { props: { news } };
}
