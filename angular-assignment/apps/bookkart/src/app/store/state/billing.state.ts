import { BillingAddress } from './../../models/billingAddress.model';
export interface BillingState {
  userDetails: BillingAddress[]
}

export const intialBillingState = {
  userDetails: []
}
