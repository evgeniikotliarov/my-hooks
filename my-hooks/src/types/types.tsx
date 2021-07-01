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

export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
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

export enum TodoActionTypes {
  FETCH_TODOS= "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE"
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

export interface FetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS;
}

export interface FetchTodosSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS,
  payload: any[]
}

export interface FetchTodosErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR
  payload: string;
}

export interface FetchTodoPageAction {
  type: TodoActionTypes.SET_TODO_PAGE
  payload: number;
}

export type TodoAction = FetchTodoPageAction | FetchTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction
export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
