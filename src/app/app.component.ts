import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ubo-graph';
  uboData: {
    title: string,
    content: string,
    x: number,
    y: number
  }[] = [
    {
      title: 'Linus Torvold',
      content: 'Content',
      x: 835,
      y: 100
    },
    {
      title: 'Bill Gates',
      content: 'Content',
      x: 835,
      y: 300
    },
    {
      title: 'Steve Jobs',
      content: 'Content',
      x: 835,
      y: 500
    },
    {
      title: 'Steve Wozniak',
      content: 'Content',
      x: 835,
      y: 700
    },
    {
      title: 'Phil Spencer',
      content: 'Content',
      x: 835,
      y: 900
    }
  ];
}
