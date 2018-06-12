import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('festa') festa: ElementRef;

  contents: Object;
  idx: number;
  logoSrc = '';

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.loadContents();
  }

  loadContents() {
    this.contentService.getContentList('', 0, 100).subscribe(res => {
      this.contents = res['data'];
      this.logoSrc = this.contents[0]['image']['logo']['m'];
      localStorage.setItem('contentName', `${this.contents[0]['name']} (${this.contents[0]['company']['name']})`);
    }, err => {
      console.log(err);
    });
  }

  changeContents() {
    const cVal = this.festa.nativeElement.value;

    for (let i in this.contents) {
      if (this.contents[i]['_id'] === cVal) {
        this.logoSrc = this.contents[i]['image']['logo']['m'];
      }
    }
  }
}
