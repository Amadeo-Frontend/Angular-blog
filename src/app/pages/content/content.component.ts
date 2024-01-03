import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imgCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        try {
          this.setValuesToComponent(id);
        } catch (erro) {
          console.error("Erro ao definir os valores do componente: ", erro);
        }
      }
    });
  }

  setValuesToComponent(id: string): void {
    const result = dataFake.find(article => article.id === id);
    if (!result) {
      throw new Error("Artigo não encontrado");
    }
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.imgCover = result.imgCover;
  }
}
