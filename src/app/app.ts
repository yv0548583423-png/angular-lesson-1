import { Component, signal } from '@angular/core';
import { IdCard } from './id-card/id-card';
@Component({
  selector: 'app-root',
  imports: [IdCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  people = [
    { birthDate: new Date(1995, 4, 15) },
    { birthDate: new Date(1998, 10, 20) },
    { birthDate: new Date(2000, 1, 5) }
  ];
}
