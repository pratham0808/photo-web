import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 10) {
        let navbars = document.getElementsByClassName("navbar"),
          len = navbars !== null ? navbars.length : 0,
          i = 0;
        for (i; i < len; i++) {
          navbars[i].classList.add("active");
        }
      } else {
        let navbars = document.getElementsByClassName("navbar"),
          len = navbars !== null ? navbars.length : 0,
          i = 0;
        for (i; i < len; i++) {
          navbars[i].classList.remove("active");
        }
      }
    });
  }

}
