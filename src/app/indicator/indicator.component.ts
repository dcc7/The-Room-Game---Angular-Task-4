import { Component, DoCheck, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit, DoCheck {

  @Input() mouseCoordinates: any;
  @ViewChild('bar', {static: false}) bar?: ElementRef; 

  constructor( private renderer: Renderer2 ) {}

  ngOnInit(): void {}

  ngDoCheck(): void {

    if (this.mouseCoordinates.xDiff > 250 && 
        this.mouseCoordinates.yDiff > 250
        ) {
      this.renderer.setStyle(this.bar.nativeElement, 'left', '-2px');
    }

    if (this.mouseCoordinates.xDiff <= 250 && 
        this.mouseCoordinates.yDiff <= 250 &&
        this.mouseCoordinates.xDiff > 150 && 
        this.mouseCoordinates.yDiff > 150
        ) {
      this.renderer.setStyle(this.bar.nativeElement, 'left', '130px');
    }

    if (this.mouseCoordinates.xDiff <= 150 && 
        this.mouseCoordinates.yDiff <= 250 &&
        this.mouseCoordinates.xDiff > 100 && 
        this.mouseCoordinates.yDiff > 100
        ) {
      this.renderer.setStyle(this.bar.nativeElement, 'left', '220px');
    }

    if (this.mouseCoordinates.xDiff <= 100 && this.mouseCoordinates.yDiff <= 100
        ) {
      this.renderer.setStyle(this.bar.nativeElement, 'left', '330px');
    }
  }

}
