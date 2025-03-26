import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: false,
  
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
    ta1: string = 'assets/TA1.webp';
    ta2: string = 'assets/TA2.png';
    ta3: string = 'assets/TA3.jpg';
    csu: string = 'assets/CSU.jpg';
    accenture1: string = 'assets/accenture1.jpg';
    accenture2: string = 'assets/accenture2.avif';
    journal: string = 'assets/Journal.jpg';
    sit: string = 'assets/SIT.png';
}
