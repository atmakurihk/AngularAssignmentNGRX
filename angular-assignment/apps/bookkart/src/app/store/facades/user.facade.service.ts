import { BillingAddress } from './../../models/billingAddress.model';
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { SaveUserAction } from '../actions/userDetails.action';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {

  constructor(private store: Store<AppState>) { }

  saveUser(user: BillingAddress) {
    this.store.dispatch(new SaveUserAction(user));
  }
}
