import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Jaz';
  age = 30;
  img = 'https://cdn.pixabay.com/photo/2023/04/13/02/20/waterfall-7921517_1280.jpg'
  btnDisabled = true;
  person = {
    name: 'Jazz',
    age: 30,
    avatar: 'https://cdn.pixabay.com/photo/2023/04/27/14/00/cat-7954713_1280.jpg'
  }

  names: string[] = ['Neko', 'Jazz', 'Morra'];
  newName = '';
  emojis = [ '😂' , '🐦', '🐳','🌮', '💚'];
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  ageIncrease() {
    this.person.age += 1;
  }
  onScroll(event: Event) {
    const elemt = event.target as HTMLElement;
    console.log(elemt.scrollTop);
  }
  changeName(event: Event) {
    const elemt = event.target as HTMLInputElement;
    this.person.name = elemt.value
    console.log(elemt.scrollTop);
  }
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number) {
    this.names.splice(index, 1);
  }

}
