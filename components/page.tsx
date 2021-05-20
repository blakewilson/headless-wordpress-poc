import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";

interface PageProps {
  page: WPGraphQL.Page;
}

export default function Page({ page }: PageProps) {
  const { title, content } = page;

  return (
    <>
      <Head>
        <title>{title} - Headless WordPress</title>
      </Head>

      <Header />

      <Hero title={title} />

      <main className="container mx-auto my-12 max-w-7xl px-4">
        <div className="text-xl prose prose-indigo max-w-7xl mx-auto">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </main>

      <Footer />
    </>
  );
}
