import Link from "next/link";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Posts", href: "/category/uncategorized" },
];

export default function Header() {
  return (
    <header className="bg-black">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-gray-700 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <span className="sr-only">Headless WordPress</span>
                <span className="text-white font-black text-2xl">
                  Headless WordPress
                </span>
              </a>
            </Link>
          </div>
          <div className="hidden ml-10 space-x-8 lg:block">
            {navigation.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="text-lg font-medium text-white hover:text-indigo-50">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-start space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className="text-lg font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
