import { StarIcon } from "@heroicons/react/20/solid";

type Props = {};

export default function TestimonialD({}: Props) {
  return (
    <div className="bg-slate-50 py-8 md:py-32  dark:bg-slate-900 dark:text-slate-100 text-slate-900">
      <div className="flex flex-col justify-center items-center p-4">
        <div className="max-w-2xl flex-col flex justify-center items-center">
          <p className="text-2xl text-center font-medium">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec aliquam aliquam, nibh nunc faucibus mauris, quis
            aliquet tortor nibh et lorem."
          </p>

          <figure className="flex-shrink-0 flex mt-8 items-center">
              <img
                className="h-10 w-10 rounded-full ring-2 ring-amber-500"
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
        </div>
      </div>
    </div>
  );
}
