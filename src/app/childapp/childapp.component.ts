import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childapp',
  templateUrl: './childapp.component.html',
  styleUrls: ['./childapp.component.css']
})
export class ChildappComponent implements OnInit {
  @Input() Response: string;
  constructor() { }

  ngOnInit() {
  }

}
