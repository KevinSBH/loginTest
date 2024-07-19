import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  bCarga: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logueo() {
    this.bCarga = true;
    setTimeout(() => {
      localStorage.setItem('currentUser', Math.floor(Math.random() *1000).toString()) 
      this.router.navigate(['/inicio']);
      this.bCarga = false;
    }, 1000);
  }

}
