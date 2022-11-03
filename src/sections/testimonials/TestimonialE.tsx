import { StarIcon } from "@heroicons/react/20/solid";

type Props = {};

export default function TestimonialE({}: Props) {
  return (
    <div className="bg-slate-100 py-8 md:py-32  dark:bg-slate-900 dark:text-slate-100 text-slate-900">
      <div className="flex flex-col justify-center items-center p-4">
        <div className="flex justify-center items-center gap-4">
          <figure className="flex-shrink-0 flex mt-8 items-center">
            <img
              className="h-48 w-48 rounded-full ring-4 ring-amber-500"
              //random pravatar
              src="https://i.pravatar.cc/150?img=1"
              alt=""
            />
          </figure>
          <div className="flex-col flex gap-1">
            <p className="text-2xl font-medium">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl nec aliquam aliquam, nibh nunc faucibus mauris, quis
              aliquet tortor nibh et lorem."
            </p>
            <div>
              <p className="text-sm font-medium dark:text-slate-100 text-slate-900">
                Alex Smith
              </p>
              <span className="text-sm font-light dark:text-slate-400 text-slate-500">
                Project Manager
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
