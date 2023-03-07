import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trip } from './trip';
import { TRIPS } from './mock-trips';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor() { }

  getTrips(): Observable<Trip[]> {
  	const trips = of(TRIPS);
  	return trips;
  }

  getTrip(id: number): Observable<Trip> {
	  const trip = TRIPS.find(h => h.id === id)!;
	  return of(trip);
  }
}



