import React from "react";

type Props = {};

export default function NewsletterB({}: Props) {
  return (
    <div className="bg-slate-900 py-8 md:py-32 text-slate-100 px-4 py-8">
      <div className="flex flex-col justify-center items-center">
        <span className="font-medium ">Register for free.</span>
        <h2 className="text-3xl font-semibold mt-2">
          Subscribe to our newsletter.
        </h2>
        <div className="mt-4">
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              className="px-8 py-3 rounded-lg  text-slate-900  placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Your email address"
            />
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 font-medium text-white px-6 py-3 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
