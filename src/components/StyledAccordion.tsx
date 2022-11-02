import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function StyledAccordion({ children, title }: Props) {
  return (
    <div className="w-full">
      <div className="">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium dark:text-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span className="uppercase">{title}</span>
                <ChevronUpIcon
                  className={`${
                    !open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="">{children}</Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
