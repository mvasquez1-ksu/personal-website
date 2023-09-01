import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements AfterViewInit{

  ngAfterViewInit(): void {

  }

  openmenu(id: string) {
    var element = document.getElementById(id)!;
    element.style.width = "50%";
    element.style.fontSize = "2.5vw";
    //this.nav_item!.style.width = "90%";
    console.warn("clicked");
  }
}
