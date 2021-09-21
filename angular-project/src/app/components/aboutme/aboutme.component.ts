import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  public title:string;
  public subtitle:string;
  public website:string;

  constructor() {
    this.title = 'Bruno Ricci';
    this.subtitle = 'Web Developer';
    this.website = 'brunoricci.github.io';
  }

  ngOnInit(): void {
  }

}
