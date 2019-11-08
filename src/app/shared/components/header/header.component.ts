import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: String;
  @Input() nbrItem: number;

  constructor(public router: Router, public _cart: CartService) {}

  ngOnInit() {}

  public getTotalItem(): Observable<number> {
    return this._cart.getTotalItem();
  }
}
