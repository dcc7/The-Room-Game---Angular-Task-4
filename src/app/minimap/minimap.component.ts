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
    console.log('living area clicked');
    this.router.navigate(['/']);
  }

  bedroomOneClick() {
    console.log('bedroom one clicked');
    this.router.navigate(['/bedroom-one']);
  }

  bedroomTwoClick() {
    console.log('bedroom two clicked');
    this.router.navigate(['/bedroom-two']);
  }

  bathroomOneClick() {
    console.log('bathroom one clicked');
    this.router.navigate(['./bathroom-one']);
  }

  bathroomTwoClick() {
    console.log('bathroom two clicked');
    this.router.navigate(['./bathroom-two']);
  }

  kitchenClick() {
    console.log('kitchen clicked');
    this.router.navigate(['/kitchen']);
  }


}
