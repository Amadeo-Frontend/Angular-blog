import { Component, OnInit } from '@angular/core';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
})
export class MenuBarComponent implements OnInit {
  // Propriedades para os ícones
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
