import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container-login',
  templateUrl: './container-login.component.html',
  styleUrls: ['./container-login.component.css']
})
export class ContainerLoginComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(["/login"]);
  }

}
