import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { format } from "date-fns";

export default function NewsCard({ news }) {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  // Format date
  const published = format(new Date(author.published_date), "yyyy-MM-dd");

  return (
    <div className="bg-white shadow rounded-lg p-6 space-y-4">
      {/* Author section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 ">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{published}</p>
          </div>
        </div>

        <div className="flex gap-4 text-xl text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-gray-700" />
          <FaShareAlt className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold leading-snug">{title}</h2>

      {/* Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full rounded-lg object-cover"
      />

      {/* Details */}
      <p className="text-gray-600">
        {details.slice(0, 200)}...
        <span className="text-orange-500 font-semibold cursor-pointer">
          {" "}
          Read More
        </span>
      </p>

      {/* Rating + views */}
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center text-orange-500 text-xl gap-1">
          {Array.from({ length: rating.number }).map((i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-700 text-base">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}
