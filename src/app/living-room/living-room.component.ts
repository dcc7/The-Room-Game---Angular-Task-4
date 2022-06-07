import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { KeysService } from '../keys.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-living-room',
  templateUrl: './living-room.component.html',
  styleUrls: ['./living-room.component.css']
})
export class LivingRoomComponent implements OnInit {

  @ViewChild('buttonKey') buttonKey: ElementRef
  buttonCheck: boolean;
  keyCoordinates = {x: 1125, y: 724};
  indicatorInformation: {xDiff?: any, yDiff?: any} = {xDiff: 0, yDiff: 0};
  playAgain: boolean = false;

  constructor(
    private keysService: KeysService,
    private messagesService: MessagesService,
    ) { }

  ngOnInit(): void {
    this.buttonCheck = this.keysService.rooms.includes('living');
  }

  alert() {
    alert(this.messagesService.randomMessage());
    this.buttonKey.nativeElement.remove();
    this.buttonCheck = false;
    const index = this.keysService.rooms.indexOf('living');
    this.keysService.rooms.splice(index, 1);
    this.keysService.keys.push('bedroom-one');
  }

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    const mouseCoorindates = {x: e.clientX, y: e.clientY};
    this.indicatorInformation.xDiff = Math.abs(mouseCoorindates.x - this.keyCoordinates.x);
    this.indicatorInformation.yDiff = Math.abs(mouseCoorindates.y - this.keyCoordinates.y);

    if (this.keysService.keys.length === 5){
      this.playAgain = true;
    }
  }

  resetGame() {
    location.reload();
  }
}
