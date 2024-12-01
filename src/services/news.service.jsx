import { destroy, get, post } from "../utils/request";
import NewsApi from "../api/news.api";

export const ServiceNewsFetchRandomList = async (params = {}) => {
  const res = await get(NewsApi.random, params);
  return res;
};
export const ServiceNewsFetchList = async (params = {}) => {
  const res = await get(NewsApi.list, params);
  return res;
};

export const ServiceNewsByCategoryFetchList = async (params = {}) => {
  const res = await get(NewsApi.list, params);
  return res;
};

export const ServiceNewsBySearchFetchList = async (params = {}) => {
  const res = await get(NewsApi.list, params);
  return res;
};
export const ServiceNewsBySlugFetchList = async (slug) => {
  const res = await get(NewsApi.showBySlug.replace(":id", slug));
  return res;
};
export const ServiceNewsByAuthorFetchList = async (params = {}) => {
  const res = await get(NewsApi.list, params);
  return res.data;
};
export const ServiceNewsByCommentsList = async (id) => {
  const res = await get(NewsApi.comments.replace(":id", id));
  return res;
};
export const ServiceLogin = async (params = {}) => {
  const res = await post(NewsApi.login, params);
  return res;
};

export const ServiceNewsPostComment = async (id, params = {}) => {
  const res = await post(NewsApi.addComment.replace(":id", id), params);

  return res;
};

export const ServiceDeleteComment = async (newsId, commentId) => {
  const url = NewsApi.removeComment
    .replace(":id", newsId)
    .replace(":commentId", commentId);
  const res = await destroy(url);

  return res;
};
