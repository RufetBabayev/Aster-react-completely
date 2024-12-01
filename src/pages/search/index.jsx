import { useEffect } from "react";
import { useFetchNewsByCategoryList } from "../../hooks/useFetch";
import { findParam } from "../../utils/helpers";
import NewsSection from "../home/components/NewsSection";
import { getStorage } from "../../storage/storage";
import { Helmet } from "react-helmet";

function SearchPage() {
  const slugCategory = findParam();
  const [newsList, fetcNewsList, newsLoading] = useFetchNewsByCategoryList(
    slugCategory,
    6
  );

  const categories = getStorage("categories");

  const categoryName = findParam();
  const title = categories.find((name) => name.slug === categoryName);

  useEffect(() => {
    fetcNewsList();
  }, [categoryName]);
  return (
    <>
      <Helmet>
        <title>{`Aster News / ${title?.name}`}</title>
      </Helmet>
      <NewsSection items={newsList} loading={newsLoading} title={title?.name} />
    </>
  );
}

export default SearchPage;
