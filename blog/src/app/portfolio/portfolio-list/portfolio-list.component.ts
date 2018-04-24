import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Portfolio} from '../portfolio';
import { AuthService } from '../../core/auth.service';
import { PortfolioserviceService } from '../portfolioservice.service';
@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {
  portfolios: Observable<Portfolio[]>

  constructor(private portfolioService: PortfolioserviceService, public auth: AuthService) { }

  ngOnInit() {
    this.portfolios = this.portfolioService.getPortfolios();
    console.log(this)
  }

}
