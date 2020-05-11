import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserManagerService } from '../services/user-manager.service';

@Component({
  selector: 'nat-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public currentUserName = '';

  public currentUser = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userManager: UserManagerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.currentUserName = params['userName'];
        this.currentUser = this.userManager.getUserByUserName(this.currentUserName);
      }
    );
  }

}
