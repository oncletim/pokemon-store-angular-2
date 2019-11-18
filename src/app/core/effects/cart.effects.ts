import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import * as CartActions from '../actions/cart.actions';
import { CartActionsTypes } from '../actions/cart.actions';

@Injectable()
export class CartItemsEffects {
  constructor(private action$: Actions) {}
}
