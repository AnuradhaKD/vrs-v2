import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrl: './small-cards.component.css'
})
export class SmallCardsComponent {
@Input() data:any
}
