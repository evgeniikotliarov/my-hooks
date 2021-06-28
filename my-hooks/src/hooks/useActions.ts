import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActionsCreators from "../store/action-creators/user"

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionsCreators, dispatch)
}