import Link from "next/link";

interface PostsProps {
  posts: WPGraphQL.Post[];
  colCount?: 1 | 2;
}

export default function Posts({ posts, colCount }: PostsProps) {
  return (
    <div
      className={`mt-10 grid gap-16 lg:grid-cols-${
        colCount || 1
      } lg:gap-x-5 lg:gap-y-12`}
    >
      {posts.map((post) => (
        <div key={post?.title}>
          <Link href={post.uri}>
            <a className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">
                {post?.title}
              </p>
              <div
                className="mt-3 text-base text-gray-500"
                dangerouslySetInnerHTML={{ __html: post?.excerpt }}
              ></div>
            </a>
          </Link>

          <div className="mt-3">
            <span className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
              <Link href={post.uri}>
                <a href={post.uri}>Read full story</a>
              </Link>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
