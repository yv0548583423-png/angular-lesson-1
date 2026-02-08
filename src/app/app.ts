import { Component, signal } from '@angular/core';
import { IdCard } from './id-card/id-card';
@Component({
  selector: 'app-root',
  imports: [IdCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
