import { GetStaticPropsContext } from "next";

export default function inferUrlFromContext({ params }: GetStaticPropsContext) {
  console.log(__filename);
  let filePath = __filename.split(".next/server/pages/")[1];

  let paramsPath = filePath.split(".js")[0];
  let path = paramsPath.split("/");

  let newPathParts = [];

  for (const param in params) {
    let paramUrlParts = params[param];

    for (let i = 0; i < path.length; i++) {
      let strippedPathPart = path[i].replace(/[\[\].]+/g, "");

      if (strippedPathPart === param) {
        let partial =
          typeof paramUrlParts === "string"
            ? paramUrlParts
            : paramUrlParts.join("/");
        path[i] = partial;
      }
    }
  }

  return path.join("/");
}
