import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styles: [`
  .blue-back {
    background-color: blue;
    color:white;
  }
  `]
})
export class DisplayDetailsComponent implements OnInit {

  enabled:boolean = true;
  counter:number = 0;
  counts:any[] = []
  constructor() { }

  ngOnInit(): void {
  }

  displayEnabled(){
    this.enabled = !this.enabled;
    this.increment();
  }

  increment(){
    this.counter += 1;
    this.counts.push(new Date());
  }
}
