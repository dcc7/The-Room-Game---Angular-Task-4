import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KeysService } from '../keys.service';

@Component({
  selector: 'app-bathroom-two',
  templateUrl: './bathroom-two.component.html',
  styleUrls: ['./bathroom-two.component.css']
})
export class BathroomTwoComponent implements OnInit {

  @ViewChild('buttonKey') buttonKey: ElementRef;
  keyCoordinates = {x: 420, y: 652};
  indicatorInformation: {xDiff?: any, yDiff?: any} = {xDiff: 0, yDiff: 0};
  keyPresent: boolean = false;
  buttonCheck: boolean;

  constructor(
    private keysService: KeysService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.keyCheck();
    this.buttonCheck = this.keysService.rooms.includes('bathroom-two');
  }

  alert() {
    alert('Congratulations, you have finished the game!');
    this.buttonKey.nativeElement.remove();
    this.buttonCheck = false;
    const index = this.keysService.rooms.indexOf('bathroom-two');
    this.keysService.rooms.splice(index, 1);
    this.router.navigate(['/']);
  }

  keyCheck() {
    if (this.keysService.keys.includes('bathroom-two')) {
      this.keyPresent = true;
    } else {
      this.keyPresent = false;
    }
  }

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    const mouseCoorindates = {x: e.clientX, y: e.clientY};
    this.indicatorInformation.xDiff = Math.abs(mouseCoorindates.x - this.keyCoordinates.x);
    this.indicatorInformation.yDiff = Math.abs(mouseCoorindates.y - this.keyCoordinates.y);
  }
}
