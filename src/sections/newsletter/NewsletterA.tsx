import React from "react";

type Props = {};

export default function NewsletterA({}: Props) {
  return (
    <div className="bg-slate-900 py-8 md:py-32 text-slate-100 px-4 py-8">
      <div className="">
        <span className="font-medium ">Get latest news.</span>
        <h2 className="text-3xl font-semibold mt-2">
          Subscribe to our newsletter.
        </h2>
        <div className="mt-4">
          <form className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                className="px-8 py-3 text-slate-900 rounded-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Your email address"
              />
              <button className="hover:bg-blue-900 bg-gradient-to-r from-blue-600 to-indigo-600 font-medium text-white px-6 py-3 rounded-lg">
                Subscribe
              </button>
            </div>
            <span className="mt-2 text-sm font-light">
              Read our{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                privacy policy.
              </a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
