export type CartItem = {
  id: number;
  name?: string;
  price?: number;
};

export type CartRow = {
  item: CartItem;
  quantity: number;
};

export type CategoryFields = {
  id: number;
  name: string;
  image: FileList;
};

export type ChangePasswordFields = {
  currentPassword: string;
  password: string;
  confirmPassword: string;
};

export type LoginFields = {
  email: string;
  password: string;
  backUrl?: string;
};

export type PersonalInfoFields = {
  firstName: string;
  lastName: string;
};

export type ResetPasswordFields = {
  email: string;
};

export type ResetPasswordTokenFields = {
  token: string;
  password: string;
  confirmPassword: string;
  email: string | null;
};

export type SigninFields = {
  email: string;
  password: string;
  confirmPassword: string;
  firstname: string;
  lastname: string;
};

export type VerifyAccountFields = {
  email: string;
};

export type SettingFields = {
  siteName: string;
  siteSubtitle: string;
  shippingCosts: number;
  orderCreatedStateId?: number;
  orderPaidStateId?: number;
};

export type SearchFields = {
  search: string;
};

export interface OrderStateFields {
  id: number;
  name: string;
  cssBadgeClass?: string;
}

export type FoodFields = {
  id: number;
  name: string;
  ingredients: string;
  price: number;
  categoryId: number;
};

export type CategoryUpdateRequest = {
  name: string;
  image: File;
};

export type CategoryListRequest = {
  page: number;
  perPage: number;
  search: string;
  orderBy: string;
  ascend: boolean;
  paginated: boolean;
};

export type CategoryCreateRequest = {
  name: string;
  image: File;
};

export type InformazioniConsegnaFields = {
  orario: string;
  indirizzo: string;
};

export type RiepilogoOrdineFields = {
  note: string;
};

export enum TipologiaConsegna {
  ASPORTO = "ASPORTO",
  DOMICILIO = "DOMICILIO",
}

export type TipologiaConsegnaFields = {
  tipologiaConsegna: TipologiaConsegna;
};

export enum AccountSigninStatus {
  none,
  pending,
  failed,
  success,
}

export enum AccountVerifyStatus {
  none,
  failed,
  success,
}

export enum RequestResult {
  none,
  failed,
  success,
}

export type AccountState = {
  signinStatus: AccountSigninStatus;
  verifyAccountStatus: AccountVerifyStatus;
  pendingRequest: boolean;
  user: any;
  userLogged: any;
};

export type AppState = {
  categories: [];
  settings: SettingFields;
};

export type AdminState = {
  categories: [] | null;
  requestIsPending: boolean;
  requestResult: RequestResult;
};

export type CartState = {
  items: { [name: string]: CartRow };
  total: number;
  tipologiaConsegna: TipologiaConsegna;
  indirizzo: string;
  orario: string;
  note: string;
};

export enum MessageType {
  INFO,
  SUCCESS,
  ERROR,
}

export type Message = {
  type: MessageType;
  text: string;
};

export type GenericPostResponse = {
  status: string;
  errorMessage?: string;
};

export interface OrderState {
  id: number;
  name: string;
  cssBadgeClass: string | null;
}

export interface OrderDetail {
  id: number;
  name: string | null;
  quantity: number;
  unitPrice: number;
}

export interface GetOrderDetailResponse {
  id: number;
  orderState: OrderState | null;
  isPaid: boolean;
  isShippingRequired: boolean;
  deliveryAddress: string | null;
  deliveryTime: string | null;
  notes: string | null;
  shippingCosts: number;
  orderDetails: OrderDetail[] | null;
  total: number;
}
