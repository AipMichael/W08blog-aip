import { useRouter } from "next/router";

export default function PostDetail({ story }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Toy carging</p>;
  }
  return (
    <>
      <div>
        <h2>{story.name}</h2>
        <p>{story.body}</p>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://isdi-blog-posts-api.herokuapp.com/posts"
  );
  const isdiApi = await response.json();
  const paths = isdiApi.map((story) => ({
    params: { id: `${story.id}` },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    `https://isdi-blog-posts-api.herokuapp.com/posts/${id}`
  );
  const isdiApi = await response.json();

  return {
    props: {
      story: isdiApi,
    },
  };
};
