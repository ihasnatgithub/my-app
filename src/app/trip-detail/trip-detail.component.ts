import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TripService } from '../trip.service';
import { Trip } from '../trip'

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent {

	trip: Trip | undefined;

	constructor(
  		private route: ActivatedRoute,
  		private tripService: TripService,
  		private location: Location
	) {}

	ngOnInit(): void {
	  this.getTrip();
	}

	getTrip(): void {
	  const id = Number(this.route.snapshot.paramMap.get('id'));
	  this.tripService.getTrip(id)
	    .subscribe(trip => this.trip = trip);
	}

	goBack(): void {
  		this.location.back();
	}
}

