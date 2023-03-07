import { Component } from '@angular/core';
import { Trip } from '../trip'

import { TripService } from '../trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

	trips: Trip[] = [];

  constructor(private tripService: TripService) { }

	ngOnInit(): void {
  		this.getTrips();
	}

	getTrips(): void {
  		this.tripService.getTrips().subscribe(trips => this.trips = trips);
	}
}
