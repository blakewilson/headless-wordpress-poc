import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Custom404() {
  return (
    <>
      <Header />

      <main className="container mx-auto my-12 max-w-7xl px-4">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">404: Not Found</span>
              <span className="block mt-2 font-normal">
                We can't find what you are looking for.
              </span>
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link href="/">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium shadow-lg rounded-md text-black bg-white hover:bg-black hover:text-white transition">
                    Go Home
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
