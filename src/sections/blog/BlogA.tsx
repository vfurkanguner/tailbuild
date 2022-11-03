import React from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

type Props = {};

export default function BlogA({}: Props) {
  return (
    <div className="px-4 py-8 md:py-32 space-y-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
      <aside className="space-y-2">
        <h2 className="text-2xl font-semibold">Newest blog posts</h2>
        <p className="max-w-xl text-gray-400 font-light text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quod, voluptate, quia, voluptates quas voluptatibus quibusdam
        </p>
      </aside>
      <div className="grid  md:grid-cols-3 gap-4  ">
        {/* Blog Post */}
        <div className="cursor-pointer shadow dark:shadow-none p-4 rounded">
          <article className="flex flex-col">
            <img
              //random photo
              src="https://picsum.photos/200/300"
              alt="blog"
              className="w-full h-48 object-cover object-center rounded-md"
            />
            <span className="text-sm mt-4 mb-2 text-blue-600 font-medium">
              Article
            </span>
            <h3 className="">
              <a
                href="#"
                className="text-gray-900 dark:text-gray-100 title-font text-xl font-medium"
              >
                Blog Title
              </a>
            </h3>
            <p className="mt-1 font-light text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
            </p>
          </article>

          <span className="hover:text-gray-800 dark:text-gray-400 text-gray-500 group">
            <a href="#" className="inline-flex items-center mt-2">
              Read More
              <ArrowRightIcon className=" w-4 h-4 group-hover:translate-x-1" />
            </a>
          </span>
        </div>
        {/* Blog Post */}
        <div className="cursor-pointer shadow dark:shadow-none p-4 rounded">
          <article className="flex flex-col">
            <img
              //random photo
              src="https://picsum.photos/200/300"
              alt="blog"
              className="w-full h-48 object-cover object-center rounded-md"
            />
            <span className="text-sm mt-4 mb-2 text-blue-600 font-medium">
              Article
            </span>
            <h3 className="">
              <a
                href="#"
                className="text-gray-900 dark:text-gray-100 title-font text-xl font-medium"
              >
                Blog Title
              </a>
            </h3>
            <p className="mt-1 font-light text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
            </p>
          </article>

          <span className="hover:text-gray-800 dark:text-gray-400 text-gray-500 group">
            <a href="#" className="inline-flex items-center mt-2">
              Read More
              <ArrowRightIcon className=" w-4 h-4 group-hover:translate-x-1" />
            </a>
          </span>
        </div>
        {/* Blog Post */}
        <div className="cursor-pointer shadow dark:shadow-none p-4 rounded">
          <article className="flex flex-col">
            <img
              //random photo
              src="https://picsum.photos/200/300"
              alt="blog"
              className="w-full h-48 object-cover object-center rounded-md"
            />
            <span className="text-sm mt-4 mb-2 text-blue-600 font-medium">
              Article
            </span>
            <h3 className="">
              <a
                href="#"
                className="text-gray-900 dark:text-gray-100 title-font text-xl font-medium"
              >
                Blog Title
              </a>
            </h3>
            <p className="mt-1 font-light text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam
            </p>
          </article>

          <span className="hover:text-gray-800 dark:text-gray-400 text-gray-500 group">
            <a href="#" className="inline-flex items-center mt-2">
              Read More
              <ArrowRightIcon className=" w-4 h-4 group-hover:translate-x-1" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
