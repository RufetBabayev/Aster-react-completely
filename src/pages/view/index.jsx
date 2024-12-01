import { useEffect } from "react";
import {
  useFetchNewsByCategoryList,
  useFetchNewsBySlug,
  useFetchNewsComments,
} from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { findParam } from "../../utils/helpers";
import Button from "@/components/ui/button";
import email from "../../assets/img/email.svg";
import { Spin } from "antd";
import moment from "moment";
import NewsCommetnForm from "../../components/widgets/news/NewsCommentForm";
import NewsCommments from "../../components/widgets/news/NewsComments";
import NewsSection from "../home/components/NewsSection";
import SubscribeEmail from "../../components/widgets/subscription/subscribe";

function ViewPage() {
  const [slugNews, setSlugNews, slugLoading] = useFetchNewsBySlug();
  const [comments, fetchComments, commentsLoading] = useFetchNewsComments([]);
  const [moreNews, setMoreNews, loading] = useFetchNewsByCategoryList(
    slugNews?.category?.slug,
    4
  );

  const slugParams = findParam();
  useEffect(() => {
    setSlugNews();
  }, [slugParams]);

  useEffect(() => {
    if (slugNews?.id) {
      fetchComments(slugNews.id);
      setMoreNews();
    }
  }, [slugNews]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
           in place of 'smooth' */
    });
  };

  return (
    <div className="lg:mt-24 mt-[150px]  px-3 ">
      {slugLoading ? (
        <div className="flex items-center justify-center min-h-80">
          <Spin size="large" />
        </div>
      ) : (
        slugNews && (
          <>
            <Helmet>
              <title>Aster News / {slugNews?.title}</title>
            </Helmet>
            <h1 className="text-2xl font-bold">{slugNews.title}</h1>
            <div>
              <div className="text-sky-600 mt-2 text-xs space-x-1">
                <Link
                  className="inline-flex bg-sky-200 px-2 py-1 rounded-theme"
                  to={`/search/${slugNews.category?.slug}`}
                >
                  {slugNews?.category?.name}
                </Link>
                <Link
                  className="inline-flex bg-sky-200 px-2 py-1 rounded-theme"
                  to={`/author/${slugNews.author?.slug}`}
                >
                  {`Yazar: ${slugNews.author?.fullname}`}
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <figure className="rounded-theme overflow-hidden aspect-3/2">
                <img
                  className="img-cover"
                  src={slugNews?.photo}
                  alt="newsDetailPhoto"
                />
              </figure>
            </div>
            <div className="mt-2">
              {slugNews.content && (
                <div dangerouslySetInnerHTML={{ __html: slugNews?.content }} />
              )}
            </div>
            <div className="text-xs flex justify-center items-center mt-9">
              <div className="text-center">
                <p className="opacity-30">
                  Dərc Olundu -
                  {moment(slugNews.published_date).format(
                    "MMMM Do YYYY - h:mm:ss a"
                  )}
                </p>
                <p className="mb-4">{slugNews.author?.fullname}</p>
                <div className="flex justify-center items-center mb-11">
                  <Button
                    onClick={scrollToTop}
                    padding={true}
                    size={"xs"}
                    border={true}
                  >
                    <span className="text-skyBlue underline">Başa Dön</span>
                  </Button>
                </div>
              </div>
            </div>
            <NewsCommetnForm fetchComments={fetchComments} id={slugNews.id} />
            <NewsCommments
              items={comments}
              id={slugNews.id}
              fetchComments={fetchComments}
            />
            <div className="bg-[#FFE8C5] dark:bg-amberBlack mt-12 flex justify-between items-center p-3">
              <SubscribeEmail block={false} flex={true} p={"p-1"} />
              <figure className="w-[120px]  lg:mt-0">
                <img src={email} alt="" />
              </figure>
            </div>
            <NewsSection items={moreNews} title={"Seçilmişlər"} />
          </>
        )
      )}
    </div>
  );
}

export default ViewPage;
