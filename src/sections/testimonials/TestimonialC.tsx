import { StarIcon } from "@heroicons/react/20/solid";

type Props = {};

export default function TestimonialC({}: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-slate-100 text-slate-900">
      <div className="p-4">
        <h3 className="text-3xl text-center text-blue-600 font-semibold">
          What our customers say
        </h3>
        <p className="text-slate-500 mt-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl nec aliquam
        </p>

        <ul className="grid md:grid-cols-3 gap-4 mt-8 md:mt-16">
          {/* Testimonial 1 */}
          <li className="flex flex-col p-8 shadow dark:shadow-none dark:border dark:border-blue-600 rounded-lg">
            <div className="">
              <div className="mt-1 font-light text-slate-700">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl nec aliquam aliquam, nibh nunc faucibus mauris,
                </p>
              </div>
            </div>

            <figure className="flex-shrink-0 flex mt-3">
              <img
                className="h-12 w-12 rounded-full ring-2 ring-amber-500"
                //random pravatar
                src="https://i.pravatar.cc/150?img=1"
                alt=""
              />
              <div>
                <p className="ml-2 font-medium dark:text-slate-100 text-slate-900">
                  Alex Smith
                </p>
                <span className="text-sm ml-2 font-light dark:text-slate-400 text-slate-500">
                  Project Manager
                </span>
              </div>
            </figure>
          </li>
          {/* Testimonial 2 */}
          <li className="flex flex-col p-8 shadow dark:shadow-none dark:border dark:border-blue-600 rounded-lg">
            <div className="">
              <div className="mt-1 font-light text-slate-700">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl nec aliquam aliquam, nibh nunc faucibus mauris,
                </p>
              </div>
            </div>

            <figure className="flex-shrink-0 flex mt-3">
              <img
                className="h-12 w-12 rounded-full ring-2 ring-amber-500"
                //random pravatar
                src="https://i.pravatar.cc/150?img=1"
                alt=""
              />
              <div>
                <p className="ml-2 font-medium dark:text-slate-100 text-slate-900">
                  Alex Smith
                </p>
                <span className="text-sm ml-2 font-light dark:text-slate-400 text-slate-500">
                  Project Manager
                </span>
              </div>
            </figure>
          </li>
          {/* Testimonial 3 */}
          <li className="flex flex-col p-8 shadow dark:shadow-none dark:border dark:border-blue-600 rounded-lg">
            <div className="">
              <div className="mt-1 font-light text-slate-700">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl nec aliquam aliquam, nibh nunc faucibus mauris,
                </p>
              </div>
            </div>

            <figure className="flex-shrink-0 flex mt-3">
              <img
                className="h-12 w-12 rounded-full ring-2 ring-amber-500"
                //random pravatar
                src="https://i.pravatar.cc/150?img=1"
                alt=""
              />
              <div>
                <p className="ml-2 font-medium dark:text-slate-100 text-slate-900">
                  Alex Smith
                </p>
                <span className="text-sm ml-2 font-light dark:text-slate-400 text-slate-500">
                  Project Manager
                </span>
              </div>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  );
}
