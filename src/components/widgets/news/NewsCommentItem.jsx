import moment from "moment";
import { FiTrash } from "react-icons/fi";
import { getStorage } from "../../../storage/storage";
import { useDeleteComment } from "../../../hooks/useFetch";
import { useEffect } from "react";
import { Spin } from "antd";

function NewsCommentItem({ commentItem = {}, id, fetchComments }) {
  const [item, selectItem, loading] = useDeleteComment();
  const user = getStorage("user");

  const deleteComment = () => {
    selectItem(id, commentItem.id);
  };
  useEffect(() => {
    fetchComments(id);
  }, [item]);
  return (
    <div>
      <h5 className="text-skyBlue font-medium">
        {commentItem?.user?.name + " " + commentItem?.user?.surname}
      </h5>
      <p className="text-[#667b90] font-light my-2">{commentItem.body}</p>
      <div className="flex justify-between">
        <span className="text-xs text-[#adbcc4] font-light">
          Paylaşıldı{" "}
          {moment(commentItem.created_at).format("MMMM Do YYYY - h:mm a")}
        </span>

        {commentItem.user.id === user.id && (
          <button
            onClick={deleteComment}
            className="flex items-center text-xs text-[#ff8cbc] space-x-1"
          >
            <span>{loading ? <Spin size="small" /> : <FiTrash />}</span>
            <span>Commenti sil</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default NewsCommentItem;
