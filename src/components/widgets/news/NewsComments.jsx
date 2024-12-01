import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import NewsCommentItem from "./NewsCommentItem";
import { useState } from "react";

function NewsCommments({ items = [], id, fetchComments }) {
  const [limit, setLimit] = useState(true);
  let comments = items?.sort((a, b) => b.id - a.id);

  if (limit) {
    comments = items?.slice(0, 4);
  }
  return (
    <div>
      <div>
        <button
          onClick={() => setLimit(!limit)}
          className="text-skyBlue flex items-center space-x-2 underline"
        >
          <span>
            {limit ? "Bütün commentləri göstər" : "Top Commentləri göstər"} (
            {comments.length})
          </span>
          <span className="inline-flex size-6 items-center justify-center bg-skyBlue rounded-full text-white">
            {limit ? <FiChevronDown /> : <FiChevronUp />}
          </span>
        </button>
      </div>
      <div className="mt-9 space-y-3">
        {comments.map((comment, index) => (
          <NewsCommentItem
            key={index}
            commentItem={comment}
            id={id}
            fetchComments={fetchComments}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsCommments;
