import { GetStaticPropsContext } from "next";

/**
 * Check if a path part is a Next.js dynamic page route i.e. [...slug]
 * @param path A path part of a Next.js pages file directory i.e. pages/posts/[postId] where [postId] would be a dynamic path
 * @returns
 */
function isDynamicPath(path: string): boolean {
  if (path.includes("[") && path.includes("]")) {
    return true;
  } else {
    return false;
  }
}

/**
 * Get the param name from a dynamic path i.e. [...postId] -> postId
 * @param path A dynamic path name
 * @returns
 */
function getDynamicPathParamName(path: string) {
  // Strip out "[", "]", and "." characters
  return path.replace(/[\[\].]+/g, "");
}

function getDynamicPathParts(filename: string): string[] | undefined {
  /**
   * Get the relative pages path from a filename. Example:
   * from:
   * Users/username/my-next-app/.next/server/pages/posts/[postSlug].js
   * to:
   * posts/[postSlug].js
   */
  let relativePagesPath = filename.split(".next/server/pages/")[1];

  if (!relativePagesPath) {
    return undefined;
  }

  // Remove the extension.
  relativePagesPath = relativePagesPath.replace(".js", "");

  // ['posts', '[postSlug]']
  return relativePagesPath.split("/");
}

function convertParamToPathPart(param: string | string[]) {
  if (typeof param === "string") {
    return param;
  } else {
    return Array.from(param).join("/");
  }
}

/**
 * Infer a nodeUri for WordPress by the __filename and Next.js GetStaticPropsContext.
 * @param filename The __filename
 * @param context Next.js GetStaticPropsContext
 * @returns
 */
export default function inferNodeUri(
  filename: string,
  context: GetStaticPropsContext
) {
  const { params } = context;
  console.log(__filename);

  // i.e. ['category', '[...category]']
  let dynamicPathParts = getDynamicPathParts(filename);

  if (!dynamicPathParts) {
    throw new Error("Filename is not correct path to Next.js pages directory");
  }

  let path = [];
  for (const part of dynamicPathParts) {
    if (isDynamicPath(part)) {
      let paramsKey = getDynamicPathParamName(part);
      path.push(convertParamToPathPart(params[paramsKey]));
    } else {
      path.push(part);
    }
  }

  return path.join("/");
}
