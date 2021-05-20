import { getApolloClient, getPosts } from "@wpengine/headless-core";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Posts from "../components/posts";

interface HomeProps {
  posts: WPGraphQL.RootQueryToPostConnection;
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Welcome to Headless WordPress!</title>
      </Head>
      <Header />

      <Hero
        bgImageUrl="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
        bgImageAlt="People working on laptops"
        title="My Blog"
        subtitle="Welcome. You are looking at a Headless WordPress site using Next.js, TypeScript, GraphQL, and Tailwind CSS"
      />

      <main className="container mx-auto my-12 max-w-7xl px-4">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Fresh off the press
        </h2>
        <div className="py-4 border-b-2" />

        <Posts posts={posts?.nodes} colCount={2} />
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const client = getApolloClient(context);
  const posts = await getPosts(client, {
    variables: {
      first: 6,
    },
  });

  return {
    props: {
      posts,
    },
  };
}
