import { headlessConfig } from "@wpengine/headless-core";

headlessConfig({
  wpUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL,
});

export default function Custom404() {
  return <div>404</div>;
}
