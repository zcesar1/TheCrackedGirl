import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-navbar3',
  templateUrl: './navbar3.component.html',
  styleUrls: ['./navbar3.component.scss']
})
export class Navbar3Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
