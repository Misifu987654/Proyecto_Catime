import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';  // Verifica esta importación

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products = [
    { id: 1, name: 'Figura de Anime', price: 30, img: 'product1.jpg' },
    { id: 2, name: 'Camiseta Anime', price: 20, img: 'product2.jpg' }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: { id: number, name: string, price: number }) {
    this.cartService.addToCart(product);
  }
}
