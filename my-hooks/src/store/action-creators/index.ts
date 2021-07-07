import * as UserActionsCreators from "./user"
import * as TodoActionsCreators from "./todo"

export default {
  ...UserActionsCreators,
  ...TodoActionsCreators
}