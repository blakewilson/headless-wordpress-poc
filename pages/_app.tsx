import { headlessConfig } from "@wpengine/headless-core";
import { HeadlessProvider } from "@wpengine/headless-react";
import "tailwindcss/tailwind.css";

headlessConfig({
  wpUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL,
});

function MyApp({ Component, pageProps }) {
  return (
    <HeadlessProvider pageProps={pageProps}>
      <Component {...pageProps} />
    </HeadlessProvider>
  );
}

export default MyApp;
