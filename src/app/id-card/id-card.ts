import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-id-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './id-card.html',
  styleUrl: './id-card.scss',
})
export class IdCard {
  people=[
    {
      firstName: 'רחלי',
      lastName: 'כהן',
      idNumber: '123456789',
      numberOfChildren: 3,
      birthDate: new Date(1995, 4, 15),
      isIsraeli: true,
      imageName: 'person1.jpg'
    },
    {
      firstName: 'שירה',
      lastName: 'לוי',
      idNumber: '987654321',
      numberOfChildren: 2,
      birthDate: new Date(1998, 10, 20),
      isIsraeli: true,
      imageName: 'person2.jpg'
    },
    {
      firstName: 'יונתן',
      lastName: 'דיין',
      idNumber: '456123789',
      numberOfChildren: 0,
      birthDate: new Date(2000, 1, 5),
      isIsraeli: false,
      imageName: 'person3.jpg'
    }
  ];
}
