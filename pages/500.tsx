import { headlessConfig } from "@wpengine/headless-core";

headlessConfig({
  wpUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL,
});

export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>;
}
