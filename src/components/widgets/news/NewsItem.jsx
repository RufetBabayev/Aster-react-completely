import moment from "moment";
import { FiShare } from "react-icons/fi";
import { Link } from "react-router-dom";
import Popup from "../popup";
function NewsItem({ item }) {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <article className="bg-white darkMode p-[17px] shadow-theme rounded-theme ">
      <Link onClick={handleLinkClick} to={`/view/${item.slug}`}>
        <div className="flex space-x-[15px]">
          <div>
            <h4 className="line-clamp-2 text-[17px] font-medium">
              {item.title}
            </h4>
            <p className="line-clamp-3 text-gray-500 text-[14px]">
              {item.description}
            </p>
          </div>
          <div>
            <figure className="size-[132px]">
              <img className="img-cover" src={item.photo} alt="" />
            </figure>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-[12px] text-gray-400 mt-[10px]">
          <span>{item.author.agency}</span>
          <span className="size-[4px] inline-block opacity-40 bg-skyBlue rounded-full"></span>
          <span>{moment(item.published_date).format("DD-MM-YYYY HH:mm")}</span>
        </div>
        <div>
          <button className="flex items-center text-[12px] space-x-[8px] text-primary font-medium">
            <FiShare />
            <Popup>Paylaş</Popup>
          </button>
        </div>
      </div>
    </article>
  );
}

export default NewsItem;
