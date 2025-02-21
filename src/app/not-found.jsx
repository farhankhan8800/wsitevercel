import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] mx-auto max-w-8xl flex justify-center items-center">
      <div className="flex items-center justify-center flex-col gap-5 ">
        <h2 className="text-center text-gray-600 text-9xl font-bold mb-6">404</h2>
        <h5 className="text-center text-gray-600 font-semibold text-3xl">Oops! Page not found.</h5>
        <p className="text-xl leading-7 font-normal text-gray-900 pb-6 text-center max-w-[700px] text-text_color">The page you were looking for could not be found.</p>
        <div className="relative h-16 mt-10 w-70">
              <Link
                href="/"
                className="inline-flex gap-3 text-base items-center bg-[var(--primary-color)] text-[var(--light-color)] py-3.5 px-8 uppercase font-normal rounded transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-5px] hover:bg-primary_hover"
              >
                Back to home <FaArrowRightLong />
              </Link>
            </div>
      </div>
    </div>
  );
}
