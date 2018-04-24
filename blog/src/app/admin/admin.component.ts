import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';

import { PostService } from '../posts/post.service';
import { AuthService } from '../core/auth.service';
import { Post } from '../posts/post';

import {Portfolio} from '../portfolio/portfolio';
import { PortfolioserviceService } from '../portfolio/portfolioservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private postService: PostService, public auth: AuthService) { }

  ngOnInit() {
  }

  delete(id: string)
  {
      this.postService.delete(id)
  }
}
