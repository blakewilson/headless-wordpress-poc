import { getApolloClient, getContentNode } from "@wpengine/headless-core";
import { GetStaticPropsContext } from "next";
import Page from "../../components/page";
import Post from "../../components/post";

interface NodeProps {
  node: WPGraphQL.Post | WPGraphQL.Page | null;
}

export default function Node({ node }: NodeProps) {
  // @ts-ignore
  if (node && node.__typename === "Page") {
    return <Page page={node as WPGraphQL.Page} />;
  }

  // @ts-ignore
  if (node && node.__typename === "Post") {
    return <Post post={node as WPGraphQL.Post} />;
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const client = getApolloClient(context);

  // TODO: Construct uri from next params.
  const node = await getContentNode(client, {
    variables: {
      id: context?.params?.slug.toString(),
    },
  });

  if (!node) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      node: node || null,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
