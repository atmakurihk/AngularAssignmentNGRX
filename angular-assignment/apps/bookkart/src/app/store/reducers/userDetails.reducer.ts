import { intialBillingState } from "../state/billing.state";

import * as IuserActions from '../actions/userDetails.action'
export function userDetailReducer(state = intialBillingState, action: IuserActions.userDetailActions) {
  switch (action.type) {
    case IuserActions.SAVE_USER_DETAILS:
      return {
        ...state,
        userDetails: [...state.userDetails, action.payload]
      }
    default:
      return state;
  }
}
