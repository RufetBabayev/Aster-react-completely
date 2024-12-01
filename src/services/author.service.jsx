import { AuthorApi } from "../api/author.api";
import { get } from "../utils/request";

export const ServiceAuthorFetchList = async (params = {}) => {
  const res = await get(AuthorApi.lists, params);
  return res;
};
