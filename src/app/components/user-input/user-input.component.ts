import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataHandlerService } from 'src/app/services/data-handler.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {

  parkingSlots: number;
  availableSlots: number;
  overflowError = false;
  constructor(
    private router: Router,
    private dtaSvc: DataHandlerService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.parkingSlots < this.availableSlots) {
      this.overflowError = true;
      return;
    }
    this.dtaSvc.availableSlots = this.availableSlots;
    this.dtaSvc.totalSlots = this.parkingSlots;
    this.router.navigate(['listing']);
  }

}
