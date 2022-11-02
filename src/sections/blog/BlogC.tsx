type Props = {};

export default function BlogC({}: Props) {
  return (
    <div className="px-4 py-8 space-y-4 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 ">
      <aside className="space-y-2">
        <h2 className="text-4xl font-semibold">Articles</h2>
      </aside>

      <div className="grid gap-4 ">
        {/* Blog Post */}
        <article className="flex flex-col md:flex-row items-center  group relative p-8  bg-gray-100 dark:bg-slate-800 rounded-2xl after:absolute after:w-[2px] after:h-10 after:bg-blue-600 after:top-[50%] after:left-0 after:-translate-y-[50%] ">
          <figure className="w-full space-y-4">
            <span className="text-base text-zinc-400 block mt-2 ">July, 2022</span>
            <h2 className="text-lg font-bold tracking-tight  sm:text-2xl">
              <a href="#" className="hover:underline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </a>
            </h2>
            <button className="px-5 py-1 border-2 hover:border-blue-600 transition border-gray-200 rounded-full">
              Read More
            </button>
          </figure>

          <figcaption className="w-full md:w-1/3 order-first md:order-last"> 
            <img
              //random photo
              src="https://picsum.photos/200/300"
              alt="blog"
              className="w-full h-48 object-cover object-center rounded-md"
            />
          </figcaption>
        </article>
        {/* Blog Post */}
        <article className="flex flex-col md:flex-row items-center  group relative p-8  bg-gray-100 dark:bg-slate-800 rounded-2xl after:absolute after:w-[2px] after:h-10 after:bg-blue-600 after:top-[50%] after:left-0 after:-translate-y-[50%] ">
          <figure className="w-full space-y-4">
            <span className="text-base text-zinc-400 block mt-2 ">July, 2022</span>
            <h2 className="text-lg font-bold tracking-tight  sm:text-2xl">
              <a href="#" className="hover:underline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </a>
            </h2>
            <button className="px-5 py-1 border-2 hover:border-blue-600 transition border-gray-200 rounded-full">
              Read More
            </button>
          </figure>

          <figcaption className="w-full md:w-1/3 order-first md:order-last"> 
            <img
              //random photo
              src="https://picsum.photos/200/300"
              alt="blog"
              className="w-full h-48 object-cover object-center rounded-md"
            />
          </figcaption>
        </article>
        {/* Blog Post */}
        <article className="flex flex-col md:flex-row items-center  group relative p-8  bg-gray-100 dark:bg-slate-800 rounded-2xl after:absolute after:w-[2px] after:h-10 after:bg-blue-600 after:top-[50%] after:left-0 after:-translate-y-[50%] ">
          <figure className="w-full space-y-4">
            <span className="text-base text-zinc-400 block mt-2 ">July, 2022</span>
            <h2 className="text-lg font-bold tracking-tight  sm:text-2xl">
              <a href="#" className="hover:underline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </a>
            </h2>
            <button className="px-5 py-1 border-2 hover:border-blue-600 transition border-gray-200 rounded-full">
              Read More
            </button>
          </figure>

          <figcaption className="w-full md:w-1/3 order-first md:order-last"> 
            <img
              //random photo
              src="https://picsum.photos/200/300"
              alt="blog"
              className="w-full h-48 object-cover object-center rounded-md"
            />
          </figcaption>
        </article>
        
      </div>
    </div>
  );
}
