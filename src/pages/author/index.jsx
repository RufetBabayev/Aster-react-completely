import { useEffect, useState } from "react";
import { useFetchNewsByAuthor } from "../../hooks/useFetch";
import { findParam } from "../../utils/helpers";
import NewsSection from "../home/components/NewsSection";
import { Helmet } from "react-helmet";

function AuthorPage() {
  const [author, fetchAuthor, authorLoading] = useFetchNewsByAuthor(null);

  const categoryName = findParam();
  const title = author.find((name) => name?.author.slug === categoryName);

  useEffect(() => {
    fetchAuthor({ authorSlug: categoryName });
  }, []);

  return (
    <>
      <Helmet>
        <title>{`Aster News / ${title?.author?.fullname}`}</title>
      </Helmet>
      <NewsSection
        authorImage={title?.author?.photo}
        items={author}
        loading={authorLoading}
        title={title ? title.author.fullname : ""}
      />
    </>
  );
}

export default AuthorPage;
