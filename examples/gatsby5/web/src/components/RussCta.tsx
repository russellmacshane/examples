import React from "react";

type RussCtaProps = {
  title: string;
  subtitle: string;
  buttonText: string;
};

const RussCta = ({ title, subtitle, buttonText }: RussCtaProps) => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">
            {subtitle}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
          <div className="mt-6 max-w-lg mx-auto lg:mx-0">
            <div className="space-y-4">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RussCta;
