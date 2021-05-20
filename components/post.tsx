import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";

interface PostProps {
  post: WPGraphQL.Post;
}

export default function Post({ post }: PostProps) {
  const { title, content } = post;

  return (
    <>
      <Head>
        <title>{title} - Headless WordPress</title>
      </Head>

      <Header />

      <Hero title={title} />

      <main className="container mx-auto my-12 max-w-7xl px-4">
        <div className="text-xl prose prose-indigo max-w-prose mx-auto">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </main>

      <Footer />
    </>
  );
}
