type Props = {};

export default function CTAB({}: Props) {
  return (
    <div className="bg-white py-8 md:py-32 dark:bg-slate-900 dark:text-slate-100 text-slate-900 p-4">
      <div className="">
        <div className="flex flex-col gap-4 items-center py-4">
          <div className="flex-1 text-center">
            <h2 className="text-3xl font-semibold">
              Ready to get started?
            </h2>
            <p className="mt-4  font-light text-gray-500 dark:text-gray-400">
              Very simple pricing. No hidden fees. No credit card required.
            </p>
          </div>

          <div className="">
            <button className="bg-blue-600 text-slate-100 px-8 py-3 rounded-lg">
              Start free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
