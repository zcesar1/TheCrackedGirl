import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogContent } from './posts/post-dashboard/post-dashboard.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DialogContentSavePost } from './posts/post-detail/post-detail.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { ImageDialogContent } from './portfolio/portfolio-dashboard/portfolio-dashboard.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatDialogModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDividerModule,
    MatTabsModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatDialogModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDividerModule,
    MatTabsModule
  ],

  declarations:[
    DialogContent,
    DialogContentSavePost,
    ImageDialogContent
  ],

  entryComponents: [
    DialogContent,
    DialogContentSavePost,
    ImageDialogContent
  ]
})
export class MaterialModule { }
