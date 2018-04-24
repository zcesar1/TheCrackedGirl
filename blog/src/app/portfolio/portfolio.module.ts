import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PortfolioDashboardComponent } from './portfolio-dashboard/portfolio-dashboard.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioserviceService } from './portfolioservice.service';

const routes: Routes = [
  {path: 'work', component: PortfolioListComponent},
  //{path: 'work/:id', component: PostDetailComponent},
  {path: 'workdashboard', component: PortfolioDashboardComponent}
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PortfolioDashboardComponent, PortfolioListComponent],
  providers: [PortfolioserviceService], 
})
export class PortfolioModule { }
