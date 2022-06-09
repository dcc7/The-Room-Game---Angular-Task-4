import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { KeysService } from '../keys.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  @ViewChild('buttonKey') buttonKey: ElementRef;
  keyCoordinates = {x: 425, y: 394};
  indicatorInformation: {xDiff?: any, yDiff?: any} = {xDiff: 0, yDiff: 0};
  keyPresent: boolean = false;
  buttonCheck: boolean;

  constructor(
    private keysService: KeysService,
    private messagesService: MessagesService,
    ) { }

  ngOnInit(): void {
    this.keyCheck();
    this.buttonCheck = this.keysService.rooms.includes('kitchen');
  }

  alert() {
    alert(this.messagesService.randomMessage());
    this.buttonKey.nativeElement.remove();
    this.buttonCheck = false;
    const index = this.keysService.rooms.indexOf('kitchen');
    this.keysService.rooms.splice(index, 1);
    this.keysService.keys.push('bedroom-two');
  }

  keyCheck() {
    if (this.keysService.keys.includes('kitchen')) {
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
