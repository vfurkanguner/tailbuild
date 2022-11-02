type Props = {};

export default function CTAD({}: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-slate-100 text-slate-900 p-4">
      <div className="">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold ">
            Start now in
            <span className="text-blue-600"> 3 easy steps</span>
          </h2>
          <p className="text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec aliquam aliquam
          </p>
        </div>

        <ul className="grid md:grid-cols-3 gap-4 mt-16">
          <li className="flex">
            <h4>
              <span className="text-2xl font-bold">1</span>
            </h4>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Create an account</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Create an account and start your free trial. No credit card
                required.
              </p>
            </div>
          </li>

          <li className="flex">
            <h4>
              <span className="text-2xl font-bold">2</span>
            </h4>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Add your first site</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Add your first site and start tracking your visitors.
              </p>
            </div>
          </li>

          <li className="flex">
            <h4>
              <span className="text-2xl font-bold">3</span>
            </h4>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Start tracking</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Start tracking your visitors and see how they interact with your
                site.
              </p>
            </div>
          </li>
        </ul>

        <div className="flex justify-center items-center">
        <div className="mt-16 w-full max-w-xs">
          <button className="bg-blue-600 w-full px-6 py-3 text-white text-lg hover:bg-blue-700 rounded-full">
            Join now
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
