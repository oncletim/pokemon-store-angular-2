import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/reducers/app.reducer';
import { getTotalItem } from 'src/app/core/selectors/cart.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: String;
  @Input() nbrItem: number;

  constructor(public router: Router, public store: Store<AppState>) {}

  ngOnInit() {}

  public getTotalItem(): Observable<number> {
    return this.store.select(getTotalItem);
  }
}
