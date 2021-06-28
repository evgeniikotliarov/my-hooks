export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}


export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}

export interface Itodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  FETCH_USERS= "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

export interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

export interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS
  payload: any[]
}
export interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR
  payload: string;
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
