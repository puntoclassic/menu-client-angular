type FetchGenericRequest = {
  search?: string;
  perPage?: number;
  page?: number;
  orderBy?: string;
  ascending?: boolean;
  paginated?: boolean;
};

export type FetchCategoryRequest = {} & FetchGenericRequest;

export type FetchFoodRequest = {} & FetchGenericRequest;

export type FetchOrderStateRequest = {} & FetchGenericRequest;

export type FetchOrderRequest = {} & FetchGenericRequest;

export type CreateCategoryData = {
  name: string;
  image?: string;
};

export type UpdateCategoryData = CreateCategoryData;

export type CreateFoodData = {
  name: string;
  ingredients?: string;
  price: number;
  categoryId: number;
};

export type UpdateFoodData = CreateFoodData & {
  id: number;
};

export type CreateOrderStateData = {
  id?: number;
  name: string;
  cssBadgeClass?: string;
};

export type SettingFields = {
  siteName: string;
  siteSubtitle: string;
  shippingCosts: number;
  orderCreatedStateId: number;
  orderPaidStateId: number;
};

export interface GetUserOrdersItem {
  id: number;
  orderState: any | null;
  total: number;
}

export interface GetUserOrdersResponse {
  count: number;
  items: GetUserOrdersItem[] | null;
  pages: number;
}

export type UpdateOrderStateData = CreateOrderStateData;
