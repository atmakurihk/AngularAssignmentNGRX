import { BillingAddress } from './../../models/billingAddress.model';
import { Action } from '@ngrx/store';
export const SAVE_USER_DETAILS = '[user] SAVE_USER_DETAILS';

export class SaveUserAction implements Action {
  readonly type = SAVE_USER_DETAILS;
  constructor(public payload: BillingAddress) { }
}

export type userDetailActions = SaveUserAction;
