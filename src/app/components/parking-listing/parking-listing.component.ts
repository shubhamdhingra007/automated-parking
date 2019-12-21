import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataHandlerService, ISlot } from 'src/app/services/data-handler.service';

@Component({
  selector: 'app-parking-listing',
  templateUrl: './parking-listing.component.html',
  styleUrls: ['./parking-listing.component.scss']
})
export class ParkingListingComponent implements OnInit {

  slotBookings: ISlot[];
  displaySlotBookings: ISlot[];
  totalSlots = 0;
  availableSlots = 0;
  amountCollected = 0;
  showAmountCollected = false;
  showParkCar = false;

  newCarDetails = {
    carNo: '',
    color: ''
  };

  searchFormFields = {
    regNo: '',
    color: ''
  };

  availableColors: string[] = [];

  constructor(
    private router: Router,
    private dataSvc: DataHandlerService
  ) {
    this.totalSlots = dataSvc.totalSlots;
    this.availableSlots = dataSvc.availableSlots;
  }

  ngOnInit() {
    if (!this.totalSlots) {
      this.router.navigate(['']);
      return;
    }
    this.init();
  }

  private init() {
    this.dataSvc.getSlotBookings().subscribe(
      data => {
        this.displaySlotBookings = [...data];
        this.slotBookings = [...data];
        this.availableColors = Array.from(new Set(this.slotBookings.map(slot => slot.color)));
      }
    );
  }

  emptySlot(index: number) {
    this.slotBookings.splice(index, 1);
    this.displaySlotBookings = [...this.slotBookings];
    this.availableSlots += 1;
    this.amountCollected += 20;
  }

  parkCar() {
    this.showParkCar = !this.showParkCar;
    if (this.showParkCar) {
      const elem = document.getElementById('park-car');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  onAddCar() {
    const newSlot: ISlot = {
      carNo: this.newCarDetails.carNo,
      color: this.newCarDetails.color,
      parkingTime: Date.now(),
      slotNo: this.nextSlotNo
    };
    this.slotBookings = [
      ...this.slotBookings,
      newSlot,
    ];
    this.displaySlotBookings = [...this.slotBookings];
    this.availableSlots -= 1;
    this.parkCar();
    this.newCarDetails = {
      carNo: '',
      color: ''
    };
  }

  get nextSlotNo() {
    const slotNos = this.slotBookings.map(booking => booking.slotNo).sort();
    if (!slotNos.length) {
      return 1;
    }
    for (let i = 1; i <= slotNos.length; i++) {
      if (i !== slotNos[i - 1]) {
        return i;
      }
    }
    return slotNos.length + 1;
  }


  search() {
    this.displaySlotBookings = this.slotBookings.filter(
      slot => slot.carNo.includes(this.searchFormFields.regNo) && slot.color.includes(this.searchFormFields.color)
    );
  }
  reset() {
    this.displaySlotBookings = [...this.slotBookings];
  }

}
