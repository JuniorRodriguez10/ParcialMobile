import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() store :any
  @Output() doClick = new EventEmitter();
  constructor() { }
  click(id: number){
    this.doClick.emit(id);
  }
  

}
