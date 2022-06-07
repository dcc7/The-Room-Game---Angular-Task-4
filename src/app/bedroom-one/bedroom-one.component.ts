import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KeysService } from '../keys.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-bedroom-one',
  templateUrl: './bedroom-one.component.html',
  styleUrls: ['./bedroom-one.component.css']
})
export class BedroomOneComponent implements OnInit {

  @ViewChild('buttonKey') buttonKey: ElementRef
  
  keyCoordinates = {x: 363, y: 795};
  indicatorInformation: {xDiff?: any, yDiff?: any} = {xDiff: 0, yDiff: 0};

  keyPresent: boolean = false;
  buttonCheck: any;

  constructor(
    private keysService: KeysService,
    private messagesService: MessagesService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.keyCheck();
    this.buttonCheck = this.keysService.rooms.includes('bedroom-one');
  }

  alert() {
    alert(this.messagesService.randomMessage());
    this.buttonKey.nativeElement.remove();
    this.buttonCheck = false;

    const index = this.keysService.rooms.indexOf('bedroom-one');
    this.keysService.rooms.splice(index, 1);

    this.keysService.keys.push('bathroom-one');
    // this.router.navigate(['/bedroom-one']);
  }

  keyCheck() {
    if (this.keysService.keys.includes('bedroom-one')) {
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
