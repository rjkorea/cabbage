import { Component, OnInit } from '@angular/core';
import { Menu } from '../../model/menu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private menu: Menu;
  constructor() {
    this.menu = {
      home: 'HOME',
      company: 'COMPANY',
      user: 'USER',
      content: 'CONTENT',
      enterance: 'ENTERANCE',
      qna: 'Q&A'
    }
  }

  ngOnInit() {
  }
}
