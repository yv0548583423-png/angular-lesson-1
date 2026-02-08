import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-id-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './id-card.html',
  styles: [`
    .id-card-container {
      border: 2px solid #333;
      padding: 15px;
      margin: 10px;
      border-radius: 8px;
      width: 250px;
      display: inline-block;
      vertical-align: top;
      background-color: #f9f9f9;
      text-align: center;
    }
    img { border-radius: 50%; margin-bottom: 10px; }
    .data-row { display: block; margin-bottom: 5px; }
  `]
})
export class IdCard {
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() idNumber: string = '';
  @Input() numberOfChildren: number = 0;
  @Input() birthDate: Date = new Date();
  @Input() isIsraeli: boolean = true;
  @Input() imageName: string = '';

  isImageHidden: boolean = false;

  getAge(): number {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const m = today.getMonth() - this.birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }
    return age;
  }

  toggleImage(): void {
    this.isImageHidden = !this.isImageHidden;
  }
}