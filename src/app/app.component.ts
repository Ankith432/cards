import { Component } from '@angular/core';
// import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = [
    { title: 'Neat Tree', imageURL: 'assets/images/tree.jpeg', username: '@nature', content: 'Saw tree during my hike today.' },
    { title: 'Snowy Mountain', imageURL: 'assets/images/mountain.jpeg', username: '@mountainlover', content: 'Here is a picture of a snowy mountain.' },
    { title: 'Mountain Biking', imageURL: 'assets/images/biking.jpeg', username: '@biking1222', content: 'I did some biking today.' }
  
  ];
}
