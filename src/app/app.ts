import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IdCard } from './id-card/id-card';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,IdCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
