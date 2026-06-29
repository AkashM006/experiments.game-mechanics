import { Link } from "react-router";

const Card = ({ title, url }: { title: string; url: string }) => {
  return (
    <div className="max-w-md rounded-xl border border-gray-700 bg-gray-900 p-6 shadow-lg transition hover:border-gray-600 hover:shadow-xl">
      <h2 className="mb-3 text-lg font-semibold text-white">{title}</h2>

      <Link
        to={url}
        className="block truncate text-sm text-sky-400 transition-colors hover:text-sky-300 hover:underline"
      >
        Go
      </Link>
    </div>
  );
};

export default Card;
