import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubo-graph',
  templateUrl: './ubo-graph.component.html',
  styleUrls: ['./ubo-graph.component.scss']
})
export class UboGraphComponent implements OnInit {
  @Input() uboData: {
    title: string,
    content: string,
    x: number,
    y: number
  }[];

  grabbing = false;
  graphPosition = {
    x: 0,
    y: 0,
    zoom: 1,
  };
  graphDragging = {
    startX: 0,
    startY: 0,
    startZoom: 1,
  };

  constructor() {
  }

  ngOnInit() {
    console.log('generating ubo node locations');
  }

  drag($event: MouseEvent) {
    if (this.grabbing) {
      this.graphPosition.x += $event.screenX - this.graphDragging.startX;
      this.graphPosition.y += $event.screenY - this.graphDragging.startY;
      this.graphDragging.startX = $event.screenX;
      this.graphDragging.startY = $event.screenY;
    }
  }

  startDrag($event: any) {
    this.grabbing = true;
    this.graphDragging.startX = $event.screenX;
    this.graphDragging.startY = $event.screenY;
  }

  endDrag($event: any) {
    this.grabbing = false;
  }

  scroll($event: WheelEvent) {
    this.graphPosition.zoom *= ($event.deltaY > 0) ? 0.75 : 1.25;
    $event.preventDefault();
  }
}
