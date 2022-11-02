type Props = {};

export default function BlogB({}: Props) {
  return (
    <div className="px-4 py-8 space-y-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
      <aside className="space-y-2">
        <h2 className="text-4xl font-semibold">Newest blog posts</h2>
      </aside>
      <div className="lg:flex gap-x-8">
        {/* Blog Post */}
        <article className="w-full space-y-2 border-b pb-4 mb-4 lg:pb-0 lg:mb-0 dark:border-gray-700  lg:border-none">
          <img
            //random photo
            src="https://picsum.photos/200/300"
            alt="blog"
            className="w-full h-72 object-cover object-center rounded-md"
          />
          <p className="text-sm text-gray-400 font-light mt-4">January, 2020</p>
          <h3 className="text-2xl font-semibold">Blog title</h3>
          <p className="text-gray-500 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptate, quia, voluptates quas voluptatibus quibusdam
          </p>
        </article>

        {/* Posts */}
        <aside className="w-full divider grid gap-4">
          {/* Blog Post */}
          <article className="w-full grid grid-cols-2 gap-4 hover:cursor-pointer border-b dark:border-gray-700 pb-4">
            <img
              //random photo
              src="https://picsum.photos/200/300"
              alt="blog"
              className="w-full h-36 object-cover object-center rounded-md"
            />
            <figure className="space-y-2">
              <span className="text-xs font-light text-gray-400">
                January, 2020
              </span>
              <h3 className="text-2xl font-semibold">Blog title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quod, voluptate
              </p>
            </figure>
          </article>
          {/* Blog Post */}
          <article className="w-full grid grid-cols-2 gap-4 hover:cursor-pointer border-b dark:border-gray-700 pb-4">
            <img
              //random photo
              src="https://picsum.photos/200/300"
              alt="blog"
              className="w-full h-36 object-cover object-center rounded-md"
            />
            <figure className="space-y-2">
              <span className="text-xs font-light text-gray-400">
                January, 2020
              </span>
              <h3 className="text-2xl font-semibold">Blog title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quod, voluptate
              </p>
            </figure>
          </article>
          {/* Blog Post */}
          <article className="w-full grid grid-cols-2 gap-4 hover:cursor-pointer pb-4">
            <img
              //random photo
              src="https://picsum.photos/200/300"
              alt="blog"
              className="w-full h-36 object-cover object-center rounded-md"
            />
            <figure className="space-y-2">
              <span className="text-xs font-light text-gray-400">
                January, 2020
              </span>
              <h3 className="text-2xl font-semibold">Blog title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quod, voluptate
              </p>
            </figure>
          </article>
        </aside>
      </div>
    </div>
  );
}
