import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { forkJoin } from "rxjs";
import { BookingService } from "src/app/services/booking.service";
import { ManageSalonsService } from "src/app/services/manage-salons.service";

@Component({
  selector: "app-salon-details",
  templateUrl: "./salon-details.component.html",
})
export class SalonDetailsComponent implements OnInit {
  salonId: string;
  salon: any = null;
  bookings: any = null;
  customersCount: number = 0;
  bookingsCount: number = 0;
  totalRevenue: number = 0;
  average: string = "0";
  hairdresserBreakdown = [];
  formulasBreakdown = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private manageSalonsService: ManageSalonsService,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.salonId = this.activatedRoute.snapshot.params._id;
    this.manageSalonsService.getSalon(this.salonId).subscribe(
      (res) => {
        this.salon = res;
        const arrayOfPromises = [
          this.bookingService.getBookingsBySalon(this.salon._id),
          this.bookingService.getTotalVisitsAndRevenueBySalon(this.salon._id),
          // this.bookingService.getBookingsBySalonCount(this.salon._id),  // replaced in getTotalVisitsAndRevenueBySalon
          this.bookingService.getCustomersBySalonCount(this.salon._id),
          this.bookingService.getHairdresserBookingsBySalon(this.salon._id),
          this.bookingService.getFormulaBookingsBySalon(this.salon._id),
        ];

        forkJoin(arrayOfPromises).subscribe((result) => {
          console.log(result);
          this.bookings = result[0];
          this.bookingsCount = result[1][0].visits;
          this.totalRevenue = result[1][0].revenue;
          this.customersCount = result[2][0].visits;
          this.average = (this.totalRevenue / this.bookingsCount).toFixed(2);
          this.hairdresserBreakdown = result[3].sort(
            (a, b) => b.revenue - a.revenue
          );
          this.formulasBreakdown = result[4].sort(
            (a, b) => b.quantity - a.quantity
          );
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
