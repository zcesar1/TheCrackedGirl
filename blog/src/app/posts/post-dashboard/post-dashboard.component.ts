import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { AuthService } from '../../core/auth.service';
import { PostService } from '../post.service';
import { MatDialog } from '@angular/material/dialog';
//import { Observable } from '@firebase/util';
import {Observable} from 'rxjs/Observable';
import { AngularFireStorage } from 'angularfire2/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  title: string
  image: string = null
  postcontent: string
  postsummary: string

  uploadPercent: Observable<number>
  downloadUrl: Observable<string>

  constructor(private auth: AuthService, private postService: PostService, public dialog: MatDialog, 
    private storage: AngularFireStorage, private router: Router) { }
  
  openDialog()
  {
    const dialogRef = this.dialog.open(DialogContent, {
      height: '250px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.createPost();
      console.log(`Dialog Result: ${result}`);
    });
  }


  ngOnInit() {
  }

  createPost()
  {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorID: this.auth.currentUserId,
      postcontent: this.postcontent,
      postsummary: this.postsummary,
      image: this.image,
      published: new Date(),
      title: this.title
    };
    this.postService.create(data); 
    this.router.navigate(["/blog"]);
    //this.title = '';
    //this.postcontent = '';
  }

  uploadImage(event)
  {
    const file = event.target.files[0]
    const path = `posts/${file.name}`
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
  selector: 'DialogContent',
  templateUrl: 'DialogContent.html',
})
export class DialogContent {}