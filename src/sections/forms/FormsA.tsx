import React from "react";

type Props = {};

export default function FormA({}: Props) {
  return (
    <div>
      <div className="flex flex-col md:flex-row p-4 gap-4">
        <div>
            
        </div>
        {/* Form Element*/}
        <form className="bg-white shadow rounded-md p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2">
            <h2 className="font-semibold text-xl">Contact Us</h2>
            <p className="text-sm font-light text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </p>
          </div>

          <div className="grid grid-cols-1 col-span-2">
            <label htmlFor="name">Name</label>
            <input
              className="border py-2 px-4 rounded-lg"
              placeholder="Name"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="grid grid-cols-1 col-span-2">
            <label htmlFor="surname">Surname</label>
            <input
              className="border py-2 px-4 rounded-lg"
              placeholder="Surname"
              type="text"
              name="surname"
              id="surname"
            />
          </div>

          <div className="grid col-span-2">
            <label htmlFor="email">Email</label>
            <input
              className="border py-2 px-4 rounded-lg"
              type="email"
              placeholder="Your email"
              name="email"
              id="email"
            />
          </div>
          <div className="grid col-span-2">
            <label htmlFor="message">Message</label>
            <textarea
              className="border py-2 px-4 rounded-lg"
              name="message"
              id="message"
            />
          </div>
          <button
            className="bg-blue-600 py-3 px-6 col-span-2 rounded-lg text-white text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
