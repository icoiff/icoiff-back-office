import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-saloon',
  templateUrl: './create-saloon.component.html',
})
export class CreateSaloonComponent implements OnInit {
  access_token: string= ''
  constructor(private route: ActivatedRoute, private router: Router) {
    this.access_token = this.route.snapshot.params.access_token;
    // if (!this.access_token) {
    //   this.router.navigate(['/error-404'])
    // }
  }

  ngOnInit(): void {
  }

}
