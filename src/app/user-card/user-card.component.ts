import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nat-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() public currentUser: any;

  constructor() { }

  ngOnInit(): void {
  }

}
