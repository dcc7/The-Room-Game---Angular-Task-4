import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minimap',
  templateUrl: './minimap.component.html',
  styleUrls: ['./minimap.component.css']
})
export class MinimapComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  livingAreaClick() {
    this.router.navigate(['/']);
  }

  bedroomOneClick() {
    this.router.navigate(['/bedroom-one']);
  }

  bedroomTwoClick() {
    this.router.navigate(['/bedroom-two']);
  }

  bathroomOneClick() {
    this.router.navigate(['./bathroom-one']);
  }

  bathroomTwoClick() {
    this.router.navigate(['./bathroom-two']);
  }

  kitchenClick() {
    this.router.navigate(['/kitchen']);
  }


}
