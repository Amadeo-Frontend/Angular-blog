import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.component';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() cardImg: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';
  @Input() Id: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    if (this.Id !== '0') {
      this.apiService.getDadosPorId(this.Id).subscribe(data => {
        if (data) {
          this.cardImg = data.imgCover;
          this.cardTitle = data.title;
          this.cardDescription = data.description;
          this.Id = data.id;

        }
      });
    }
  }
}
