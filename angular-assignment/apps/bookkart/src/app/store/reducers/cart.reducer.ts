import { initialCartState } from './../state/cart.state';
import * as IcartActions from './../actions/cart.action';


export function cartReducer(state = initialCartState,action:IcartActions.cartActions){

  switch(action.type)
  {
    case IcartActions.ADD_TO_CART :
      return {
        ...state,
        cart:[...state.cart,action.payload]
    };
    case IcartActions.REMOVE_FROM_CART:
      return{
        ...state,
        cart:state.cart.filter((book,index) =>{
          return index !== action.index
        })
      };
    case IcartActions.CLEAR_CART:
      return{
        ...state,
        cart:[...initialCartState.cart]
      }
    default:
      return state;
  }
}
