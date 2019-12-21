import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ISlot {
  'carNo': string;
  'color': string;
  'slotNo': number;
  'parkingTime': number;
}

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  totalSlots = 0;
  availableSlots = 0;
  constructor(
    private http: HttpClient
  ) { }

  getSlotBookings(): Observable<ISlot[]> {
    return this.http.get<ISlot[]>('assets/parking.json');
  }
}
