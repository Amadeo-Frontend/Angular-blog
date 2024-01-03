import { Component, Input, OnInit } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  faNewspaper = faNewspaper
@Input()
smallCardTitle:string = ''
@Input()
smallCardImg:string = ''
@Input()
Id:string ='0'
  constructor() { }

  ngOnInit(): void {
  }

}
