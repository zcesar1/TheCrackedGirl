import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Observable} from 'rxjs/Observable';
import { AngularFireStorage } from 'angularfire2/storage';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AuthService } from '../../core/auth.service';
import {PortfolioserviceService} from "../portfolioservice.service";

@Component({
  selector: 'app-portfolio-dashboard',
  templateUrl: './portfolio-dashboard.component.html',
  styleUrls: ['./portfolio-dashboard.component.scss']
})
export class PortfolioDashboardComponent implements OnInit {
  title: string
  uploadPercent: Observable<number>
  downloadUrl: Observable<string>
  image: string = null

  constructor(private storage: AngularFireStorage, private router: Router, private auth: AuthService,
    public dialog: MatDialog, private portfolioService: PortfolioserviceService) { }

    openDialog()
    {
      const dialogRef = this.dialog.open(ImageDialogContent, {
        height: '250px',
        width: '500px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.createImagePost();
        console.log(`Dialog Result: ${result}`);
      });
    }
  

  ngOnInit() {
  }

  createImagePost()
  {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorID: this.auth.currentUserId,
      title: this.title,
      image: this.image,
      published: new Date()
    };
    this.portfolioService.create(data); 
    this.router.navigate(["/work"]);
  }

uploadImage(event)
  {
    const file = event.target.files[0]
    const path = `portfolio/${file.name}`
    if(file.type.split('/')[0] !== 'image')
    {
      return alert('Image files only')
    }
    
    else
    {
      const task = this.storage.upload(path, file)
      this.downloadUrl = task.downloadURL()
      this.uploadPercent = task.percentageChanges()
      console.log('Image Uploaded!')
      this.downloadUrl.subscribe(url => this.image = url)
    }
  }

}

@Component({
  selector: 'ImageDialogContent',
  templateUrl: 'ImageDialogContent.html',
})
export class ImageDialogContent {}