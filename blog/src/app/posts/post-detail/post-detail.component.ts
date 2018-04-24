import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import {Post} from '../post';
import { AuthService } from '../../core/auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post: Post;

  editing: boolean = false;

  constructor(private route: ActivatedRoute, private postService: PostService,
  private router: Router, public auth: AuthService, public dialog: MatDialog) { }

  openDialog()
  {
    const dialogRef = this.dialog.open(DialogContentSavePost, {
      height: '250px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updatePost();
      console.log(`Dialog Result: ${result}`);
    });
  }

  ngOnInit() {
    this.getPost()
    console.log(this)
  }

  getPost()
  {
    const id = this.route.snapshot.paramMap.get('id');
    return this.postService.getPostData(id).subscribe(data => this.post = data);
  }

  updatePost()
  {
    const formData ={
      title: this.post.title,
      postcontent: this.post.postcontent,
      postsummary: this.post.postsummary
    };
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.update(id, formData);
    this.editing = false;
  }

  delete()
  {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.delete(id);
    this.router.navigate(["/blog"]);
  }
}

@Component({
  selector: 'DialogContentSavePost',
  templateUrl: 'DialogContentSavePost.html',
})
export class DialogContentSavePost {}