import CategoryApi from "../api/category.api";
import { get } from "../utils/request";

export const ServiceCategoryFetchList = async (params = {}) => {
  const res = await get(CategoryApi.list);
  return res;
};
