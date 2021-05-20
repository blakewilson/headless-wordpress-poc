import { getApolloClient, getPosts } from "@wpengine/headless-core";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Hero from "../../components/hero";
import Posts from "../../components/posts";

const POSTS_PER_PAGE = 10;

interface CategoryProps {
  posts: WPGraphQL.RootQueryToPostConnection;
  categoryName: string;
}

export default function Category({ posts, categoryName }: CategoryProps) {
  return (
    <>
      <Head>
        <title>{categoryName} posts - Headless WordPress</title>
      </Head>

      <Header />

      <Hero
        title={`Category: ${categoryName}`}
        subtitle={`Viewing posts most recently created from ${categoryName}`}
      />

      <main className="container mx-auto my-12 max-w-7xl px-4">
        <Posts posts={posts?.nodes} />
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { categorySlug } = context?.params;

  const client = getApolloClient(context);
  const posts = await getPosts(client, {
    variables: {
      first: POSTS_PER_PAGE,
      where: {
        categoryName: categorySlug.toString(),
      },
    },
  });

  return {
    props: {
      posts,
      categoryName: categorySlug.toString(),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
