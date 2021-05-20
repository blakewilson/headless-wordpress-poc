interface HeroProps {
  title?: string;
  subtitle?: string;
  bgImageUrl?: string;
  bgImageAlt?: string;
  Buttons?: () => JSX.Element;
}

export default function Hero({
  title,
  subtitle,
  bgImageUrl,
  bgImageAlt,
  Buttons,
}: HeroProps) {
  return (
    <div className="relative">
      <div className="max-w-full mx-auto">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            {bgImageUrl && (
              <img
                className="h-full w-full object-cover"
                src={bgImageUrl}
                alt={bgImageAlt}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-700 to-black mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            {title && (
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">{title}</span>
              </h1>
            )}

            {subtitle && (
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                {subtitle}
              </p>
            )}

            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                {Buttons && <Buttons />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
