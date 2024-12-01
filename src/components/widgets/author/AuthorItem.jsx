import { Link } from "react-router-dom";
import Button from "../../ui/button";

function AuthorItem({ item }) {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <article className="bg-white darkMode shadow-theme p-[13px] lg:w-[132px] min-w-[107px] h-[190px] flex flex-col justify-between">
      <figure className="size-[70px] rounded-full mx-auto overflow-hidden">
        <img src={item.photo} alt="" className="img-cover" />
      </figure>
      <div className="pt-[7px] flex flex-col flex-1">
        <h5 className="text-center font-medium text-[14px]">{item.fullname}</h5>
        <p className="text-center text-[12px] mb-[7px] text-gray-500 h-full">
          {item.agency}
        </p>
        <Button size="sm" property="sky-blue" rounded={true} block={true}>
          <Link onClick={handleLinkClick} to={`/author/${item.slug}`}>
            Xəbərlər
          </Link>
        </Button>
      </div>
    </article>
  );
}

export default AuthorItem;
