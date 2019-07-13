import { Movie } from './movies';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  movies: Movie[]
  constructor(private breakpointObserver: BreakpointObserver) {
    this.movies = [
      {name: "How to Train Your Dragon: The Hidden World", director:"Dean DeBlois", realse: "February 22, 2019", rows: 1, cols:1},
      {name: "Aladdin", director:"Guy Ritchie", realse: "May 24, 2019", rows: 1, cols:1},
      {name: "Captain Marvel", director:"Anna Boden, Ryan Fleck", realse: "March 8, 2019", rows: 1, cols:1},
      {name: "Jurassic World", director:"Colin Trevorrow", realse: "June 12, 2015", rows: 1, cols:1},
      {name: "The Little Mermaid", director:"Blake Harris", realse: "August 2, 2018", rows: 1, cols:1},
      {name: "Smallfoot", director:"Karey Kirkpatrick", realse: "September 28, 2018", rows: 1, cols:1}

    ]
  }
}
