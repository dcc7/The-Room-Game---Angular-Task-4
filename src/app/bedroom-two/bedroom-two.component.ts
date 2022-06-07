import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KeysService } from '../keys.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-bedroom-two',
  templateUrl: './bedroom-two.component.html',
  styleUrls: ['./bedroom-two.component.css']
})
export class BedroomTwoComponent implements OnInit {

  keyCoordinates = {x: 1079, y: 798};
  indicatorInformation: {xDiff?: any, yDiff?: any} = {xDiff: 0, yDiff: 0};

  @ViewChild('buttonKey') buttonKey: ElementRef;

  keyPresent: boolean = false;
  buttonCheck: boolean;

  constructor(
    private keysService: KeysService,
    private messagesService: MessagesService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.keyCheck();
    this.buttonCheck = this.keysService.rooms.includes('bedroom-two');
  }

  alert() {
    alert(this.messagesService.randomMessage());
    this.buttonKey.nativeElement.remove();
    this.buttonCheck = false;

    const index = this.keysService.rooms.indexOf('bedroom-two');
    this.keysService.rooms.splice(index, 1);

    this.keysService.keys.push('bathroom-two');
    // this.router.navigate(['/bedroom-one']);
  }

  keyCheck() {
    if (this.keysService.keys.includes('bedroom-two')) {
      this.keyPresent = true;
    } else {
      this.keyPresent = false;
    }
  }

  //Mouse detection
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    const mouseCoorindates = {x: e.clientX, y: e.clientY};
    this.indicatorInformation.xDiff = Math.abs(mouseCoorindates.x - this.keyCoordinates.x);
    this.indicatorInformation.yDiff = Math.abs(mouseCoorindates.y - this.keyCoordinates.y);
  }

}
