import { useState } from "react";
import { ServiceCategoryFetchList } from "../services/category.service";
import {
  ServiceDeleteComment,
  ServiceLogin,
  ServiceNewsByAuthorFetchList,
  ServiceNewsByCategoryFetchList,
  ServiceNewsByCommentsList,
  ServiceNewsBySearchFetchList,
  ServiceNewsBySlugFetchList,
  ServiceNewsFetchList,
  ServiceNewsFetchRandomList,
  ServiceNewsPostComment,
} from "../services/news.service";
import { ServiceAuthorFetchList } from "../services/author.service";
import { serviceWeather } from "../services/weather.service";
import { findParam } from "../utils/helpers";

const useFetch = (state = false) => {
  const [data, setData] = useState(state);
  const [loading, setLoading] = useState(false);

  const fetch = async (service, params, id = false) => {
    setLoading(true);
    const res = await service(params, id);
    setData(res);
    setLoading(false);
  };
  return [data, fetch, loading];
};

//category fetch
export const useFetchCategoryList = () => {
  const [data, fetch, loading] = useFetch([]);

  const apiFetch = async (params = {}) => {
    fetch(ServiceCategoryFetchList, params);
  };

  return [data, apiFetch, loading];
};

//Random news fetch
export const useFetchRandomNewsList = () => {
  const [data, fetch, loading] = useFetch([]);

  const apiFetch = async () => {
    fetch(ServiceNewsFetchRandomList, { limit: 6 });
  };

  return [data?.data || [], apiFetch, loading];
};

// Regular news
export const useFetchNewsList = () => {
  const [data, fetch, loading] = useFetch([]);

  const apiFetch = async () => {
    fetch(ServiceNewsFetchList, { limit: 6 });
  };

  return [data?.data || [], apiFetch, loading];
};

// Author list
export const useFetchAuthorRandomList = () => {
  const [data, fetch, loading] = useFetch([]);

  const apiFetch = async () => {
    fetch(ServiceAuthorFetchList, { random: true, limit: 5 });
  };

  return [data?.data || [], apiFetch, loading];
};

// news by category
export const useFetchNewsByCategoryList = (categorySlug, count) => {
  const [data, fetch, loading] = useFetch([]);
  const paramCategory = { category: categorySlug, limit: count };
  const apiFetch = async () => {
    fetch(ServiceNewsByCategoryFetchList, paramCategory);
  };

  return [data?.data || [], apiFetch, loading];
};

// news by search title
export const useFetchNewsBySearch = (text) => {
  const [data, fetch, loading] = useFetch([]);
  const paramCategory = { title: text, limit: 5 };
  const apiFetch = async () => {
    fetch(ServiceNewsBySearchFetchList, paramCategory);
  };

  return [data?.data || [], apiFetch, loading];
};

// news by slug
export const useFetchNewsBySlug = () => {
  const [data, fetch, loading] = useFetch(false);
  const slug = findParam();
  const apiFetch = async () => {
    fetch(ServiceNewsBySlugFetchList, slug);
  };

  return [data || false, apiFetch, loading];
};
// news by author
export const useFetchNewsByAuthor = () => {
  const [data, fetch, loading] = useFetch(false);

  const apiFetch = async (author) => {
    fetch(ServiceNewsByAuthorFetchList, author);
  };

  return [data || [], apiFetch, loading];
};

// news comments
export const useFetchNewsComments = () => {
  const [data, fetch, loading] = useFetch(false);

  const apiFetch = async (id) => {
    fetch(ServiceNewsByCommentsList, id);
  };

  return [data || [], apiFetch, loading];
};
// wheather info
export const useFetchWeatherData = () => {
  const [data, fetch, loading] = useFetch(false);

  const apiFetch = async () => {
    fetch(serviceWeather);
  };

  return [data || false, apiFetch, loading];
};
export const useFetchLoginData = () => {
  const [data, fetch, loading] = useFetch(false);

  const apiFetch = async (params = {}) => {
    fetch(ServiceLogin, params);
  };

  return [data || false, apiFetch, loading];
};

export const usePostCommentData = () => {
  const [data, fetch, loading] = useFetch(false);
  const apiFetch = async (id, params = {}) => {
    fetch(ServiceNewsPostComment, id, params);
  };
  return [data || false, apiFetch, loading];
};

export const useDeleteComment = () => {
  const [data, fetch, loading] = useFetch(false);
  const apiFetch = async (newsId, commentId) => {
    fetch(ServiceDeleteComment, newsId, commentId);
  };
  return [data || false, apiFetch, loading];
};
