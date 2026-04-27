import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold mb-4 animate-pulse">404</h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Oops! Page not found
        </h2>

        <p className="text-lg opacity-80 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
