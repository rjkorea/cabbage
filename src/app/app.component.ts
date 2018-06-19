import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // prod
    // localStorage.setItem('csk', '5b11ece0ba590e015ee4ea2d');

    // dev
    localStorage.setItem('csk', '5b1f523b2f30091c860f3f7d');
  }
}
