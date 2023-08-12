import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject, Observable } from "rxjs";
import { CartRow, CartState, TipologiaConsegna } from "src/types";

var initialCartState = {
  items: {},
  total: 0,
  indirizzo: "",
  orario: "",
  note: "",
  tipologiaConsegna: TipologiaConsegna.ASPORTO,
};

@Injectable({
  providedIn: "root",
})
export class CartService {
  cartStatus = new BehaviorSubject<CartState>(initialCartState);

  constructor() {
    this.fetchFromStorage().subscribe({
      next: (value: any) => {
        if (value != null) {
          this.notifyChange(value);
        }
      },
      error: () => {
        var state = this.cartStatus.getValue();
        state.items = {};

        this.notifyChange(state);
      },
    });
  }

  updateIndirizzoOrario(indirizzo: string, orario: string) {
    var state = this.cartStatus.getValue();
    state.indirizzo = indirizzo;
    state.orario = orario;

    this.cartStatus.next(state);
  }

  updateTipologiaConsegna(tipologiaConsegna: TipologiaConsegna) {
    var state = this.cartStatus.getValue();
    state.tipologiaConsegna = tipologiaConsegna;

    this.cartStatus.next(state);
  }

  updateNote(note: string) {
    var state = this.cartStatus.getValue();
    state.note = note;

    this.cartStatus.next(state);
  }

  fetchFromStorage() {
    return new Observable((emitter) => {
      var cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        emitter.next(cart);
      } else {
        emitter.error();
      }
    });
  }

  addToCart(item: any) {
    var state = this.cartStatus.getValue();

    state.items[item.id] = {
      item: item,
      quantity: 1,
    };

    this.notifyChange(state);
  }

  removeFromCart(item: any) {
    var state = this.cartStatus.getValue();

    delete state.items[item.id];
    this.notifyChange(state);
  }

  increaseQta(item: any) {
    var state = this.cartStatus.getValue();

    state.items[item.id].quantity += 1;

    this.notifyChange(state);
  }

  decreaseQta(item: any) {
    var state = this.cartStatus.getValue();

    if (state.items[item.id].quantity > 1) {
      state.items[item.id].quantity -= 1;
    } else {
      //altrimenti elimina il prodotto
      delete state.items[item.id];
    }
    this.notifyChange(state);
  }

  notifyChange(state: CartState) {
    var total = 0;
    Object.values(state.items).forEach((row: CartRow) => {
      total += row.item.price! *
        row.quantity;
    });

    state.total = total;

    this.storeCart(state);

    this.cartStatus.next(state);
  }

  storeCart(state: CartState) {
    localStorage.setItem("cart", JSON.stringify(state));
  }

  resetCart() {
    var state = this.cartStatus.getValue();
    state.items = {};
    this.cartStatus.next(state);
    this.storeCart(initialCartState);
  }
}
