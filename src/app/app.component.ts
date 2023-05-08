import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent= '';
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

  onLoaded(img: string) {
    console.log('loading padre', img);
  }
}
