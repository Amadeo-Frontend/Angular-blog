import { Component, Input, OnInit } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../services/api/api.component';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  faNewspaper = faNewspaper;
  @Input() Id: string = '0';
  @Input() smallCardTitle: string = '';
  @Input() smallCardImg: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    if (this.Id !== '0') {
      this.apiService.getDadosPorId(this.Id).subscribe(data => {
        if (data) {
          this.smallCardTitle = data.title;
          this.smallCardImg = data.imgCover;
        }
      });
    }
  }
}
