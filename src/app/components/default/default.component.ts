import { Component  } from '@angular/core';

@Component({
  selector: 'app-default',
  standalone: false,
  
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {
  leetcode: string = 'assets/leetcode.webp';
  home: string = 'assets/Home.png';
  
  
}
