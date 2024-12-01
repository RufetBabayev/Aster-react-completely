import {
  useFetchAuthorRandomList,
  useFetchNewsList,
  useFetchRandomNewsList,
} from "../../hooks/useFetch";
import { useEffect } from "react";
import NewsSection from "./components/NewsSection";
import AuthorSection from "./components/AuthorSection";
import { Helmet } from "react-helmet";

function HomePage() {
  const [randomNews, fetcRandomNews, randomLoading] = useFetchRandomNewsList();
  const [newsList, fetcNewsList, newsLoading] = useFetchNewsList();
  const [authors, fetchAuthors, authorLoading] = useFetchAuthorRandomList();
  useEffect(() => {
    fetcRandomNews();
    fetcNewsList();
    fetchAuthors();
  }, []);

  return (
    <>
      <Helmet>
        <title>Aster News</title>
      </Helmet>

      <div>
        <NewsSection
          title={"Ən son xəbərlər"}
          items={newsList}
          loading={newsLoading}
          cards={true}
        />
      </div>
      <div>
        <AuthorSection
          title={"Yazarlar"}
          items={authors}
          loading={authorLoading}
        />
      </div>
      <div>
        <NewsSection
          title={"Ən çox oxunanlar"}
          items={randomNews}
          loading={randomLoading}
        />
      </div>
    </>
  );
}

export default HomePage;
