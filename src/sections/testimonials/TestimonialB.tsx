import { StarIcon } from "@heroicons/react/20/solid";

type Props = {};

export default function TestimonialB({}: Props) {
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
            <figure className="flex-shrink-0 flex flex-col items-center text-center space-y-2">
              <img
                className="h-12 w-12 rounded-full ring-2 ring-amber-500"
                //random pravatar
                src="https://i.pravatar.cc/150?img=1"
                alt=""
              />
              <div className="flex flex-col space-y-1">
                <p className="ml-2 font-medium dark:text-slate-100 text-slate-900">
                  Marcia Hill
                </p>
                <span className="text-sm ml-2 font-light dark:text-slate-400 text-slate-500">
                  Rome, Italy
                </span>
                <span className="inline-flex">
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                </span>
              </div>
            </figure>
            <div className="mt-3">
              <div className="mt-1 text-sm text-slate-700 text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl nec aliquam aliquam, nibh nunc faucibus mauris,
                </p>
              </div>
            </div>
          </li>
            {/* Testimonial 2 */}
          <li className="flex flex-col p-8 shadow dark:shadow-none dark:border dark:border-blue-600 rounded-lg">
            <figure className="flex-shrink-0 flex flex-col items-center text-center space-y-2">
              <img
                className="h-12 w-12 rounded-full ring-2 ring-amber-500"
                //random pravatar
                src="https://i.pravatar.cc/150?img=1"
                alt=""
              />
              <div className="flex flex-col space-y-1">
                <p className="ml-2 font-medium dark:text-slate-100 text-slate-900">
                  Marcia Hill
                </p>
                <span className="text-sm ml-2 font-light dark:text-slate-400 text-slate-500">
                  Rome, Italy
                </span>
                <span className="inline-flex">
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                </span>
              </div>
            </figure>
            <div className="mt-3">
              <div className="mt-1 text-sm text-slate-700 text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl nec aliquam aliquam, nibh nunc faucibus mauris,
                </p>
              </div>
            </div>
          </li>
            {/* Testimonial 3 */}
          <li className="flex flex-col p-8 shadow dark:shadow-none dark:border dark:border-blue-600 rounded-lg">
            <figure className="flex-shrink-0 flex flex-col items-center text-center space-y-2">
              <img
                className="h-12 w-12 rounded-full ring-2 ring-amber-500"
                //random pravatar
                src="https://i.pravatar.cc/150?img=1"
                alt=""
              />
              <div className="flex flex-col space-y-1">
                <p className="ml-2 font-medium dark:text-slate-100 text-slate-900">
                  Marcia Hill
                </p>
                <span className="text-sm ml-2 font-light dark:text-slate-400 text-slate-500">
                  Rome, Italy
                </span>
                <span className="inline-flex">
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                  <StarIcon className="h-4 w-4 text-amber-600 ml-2" />
                </span>
              </div>
            </figure>
            <div className="mt-3">
              <div className="mt-1 text-sm text-slate-700 text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl nec aliquam aliquam, nibh nunc faucibus mauris,
                </p>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
