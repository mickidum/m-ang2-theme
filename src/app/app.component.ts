import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'WORDPRESS ANGULAR 2';

  ngOnInit() {
    sessionStorage.clear();
      localStorage.clear();
  	setTimeout(() => {
  		sessionStorage.clear();
  		localStorage.clear();
  	}, 600000)
  }

}
