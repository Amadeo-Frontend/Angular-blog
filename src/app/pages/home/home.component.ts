import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  dados: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.apiService.getDados().subscribe(
      data => {
        this.dados = data;
      },
      erro => {
        console.error('Erro ao carregar dados', erro);
      }
    );
  }
}
