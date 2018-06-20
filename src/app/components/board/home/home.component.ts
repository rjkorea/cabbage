import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { ContentService } from '../../../services/content.service';
import { resolve } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('festa') festa: ElementRef;

  contentId: string;
  contents: Object;
  groups: Object;
  timer: any;
  logoSrc = '';
  groupLength = 0;
  size = 10;
  page = 1;

  groupCount = 0;
  groupUsedCount = 0;

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.loadContents();
  }

  loadContents() {
    this.contentService.getContentList('', 0, 100).subscribe(res => {
      this.contents = res['data'];
      this.contentId = res['data'][0]['_id'];
      this.logoSrc = this.contents[0]['image']['logo']['m'];
      // localStorage.setItem('contentName', `${this.contents[0]['name']} (${this.contents[0]['company']['name']})`);

      this.loadGroups('', this.page);
    }, err => {
      console.log(err);
    });
  }

  loadGroups(query: any, page: any): void {
    this.contentService.getGroupList(this.contentId, query, (page - 1) * this.size, this.size).subscribe(res => {
      const length = res['data'].length;

      if (length <= 0) {
        this.page = 1;
        this.groupLength = 0;

        clearInterval(this.timer);
        this.loadGroups('', ++this.page);
        this.changeGroupPage();
      } else {
        this.groups = res['data'];
        this.groupLength = res['data'].length;
        this.groupCount = res['group_ticket_count'];
        this.groupUsedCount = res['group_ticket_used_count'];
      }
    }, err => {
      console.log(err);
    });
  }

  changeContents(): void {
    const cVal = this.festa.nativeElement.value;

    this.page = 1;

    for (const i in this.contents) {
      if (this.contents[i]['_id'] === cVal) {
        this.contentId = this.contents[i]['_id'];
        this.logoSrc = this.contents[i]['image']['logo']['m'];
      }
    }

    this.loadGroups('', this.page);
  }

  changeGroupPage(): void {
    this.timer = setInterval(() => {
      this.loadGroups('', ++this.page);
    }, 60000);
  }
}
