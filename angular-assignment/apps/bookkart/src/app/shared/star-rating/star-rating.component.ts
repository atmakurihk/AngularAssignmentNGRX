import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angular-assignment-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() rating: number;
  fullRating = 5;
  ratingArray: string[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < this.fullRating; index++) {
      if (index < this.rating) {
        this.ratingArray.push('star');
      } else {
        this.ratingArray.push('star_border');
      }
    }
  }

}
