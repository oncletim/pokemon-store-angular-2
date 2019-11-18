import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/app.reducer';
import * as CartActions from 'src/app/core/actions/cart.actions';
@Injectable()
export class CartItemsEffects {
  constructor(
    private action$: Actions,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {}

  @Effect({ dispatch: false })
  addItem = this.action$.pipe(
    ofType<CartActions.AddItem>(CartActions.CartActionsTypes.ADD_ITEM),
    tap(action =>
      this.toastr.success(
        action.payload.name + ' has been catched.',
        'Oooh yeeeah !',
        {
          timeOut: 2000,
          positionClass: 'toast-bottom-right'
        }
      )
    )
  );

  @Effect({ dispatch: false })
  RemoveItem = this.action$.pipe(
    ofType<CartActions.RemoveItem>(CartActions.CartActionsTypes.REMOVE_ITEM),
    tap(action =>
      this.toastr.warning(
        action.payload.name + ' escaped from your cart!',
        'Oooh noooo !',
        {
          timeOut: 2000,
          positionClass: 'toast-bottom-right'
        }
      )
    )
  );

  @Effect({ dispatch: false })
  DeleteItems = this.action$.pipe(
    ofType<CartActions.DeleteItems>(CartActions.CartActionsTypes.DELETE_ITEMS),
    tap(action =>
      this.toastr.warning(
        action.payload.quantity +
          ' ' +
          action.payload.name +
          ' escaped from your cart!',
        'Oooh noooo !',
        {
          timeOut: 2000,
          positionClass: 'toast-bottom-right'
        }
      )
    )
  );
}
