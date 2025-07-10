import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <>
      <main className="grid h-[100dvh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-6xl font-semibold text-green-600">404</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-8xl">
            Page not found
          </h1>
          <p className="mt-6 text-2xl leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-8">
            <Link
              to="/"
              className="rounded-md bg-green-600  px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back
            </Link>
            <Link
              to="#"
              className="text-2xl px-3.5 py-2.5 font-semibold flex gap-3 text-gray-900"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
