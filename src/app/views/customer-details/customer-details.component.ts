import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { forkJoin } from "rxjs";
import { BookingService } from "src/app/services/booking.service";
import { ManageClientsService } from "src/app/services/manage-clients.service";

@Component({
  selector: "app-customer-details",
  templateUrl: "./customer-details.component.html",
})
export class CustomerDetailsComponent implements OnInit {
  customerId: string;
  customer: any = null;
  bookings: any = null;
  bookingsCount: number = 0;
  visitedSalonsCount: number = 0;
  totalSpending: number = 0;
  average: string = "0";
  favoriteHairdresser: string = "";
  favoriteSalon: string = "";
  constructor(
    private activatedRoute: ActivatedRoute,
    private manageClientsService: ManageClientsService,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.params._id;
    this.manageClientsService.getClient(this.customerId).subscribe(
      (res) => {
        this.customer = res;
        const arrayOfPromises = [
          this.bookingService.getBookingsByCustomer(this.customer._id),
          this.bookingService.getTotalVisitsAndSpendingByCustomer(
            this.customer._id
          ),
          // this.bookingService.getBookingsByCustomerCount(this.customer._id), // replaced in getTotalVisitsAndSpendingByCustomer
          this.bookingService.getVisitedSalonsByCustomerCount(
            this.customer._id
          ),
        ];

        forkJoin(arrayOfPromises).subscribe((result) => {
          console.log(result);
          this.bookings = result[0];
          const hairdresser = this.favorite(
            this.bookings.map((booking) => booking.hairdresser)
          );
          this.favoriteHairdresser = {
            ...hairdresser,
            full_name: `${hairdresser.first_name} ${hairdresser.last_name}`,
          };
          this.favoriteSalon = this.favorite(
            this.bookings.map((booking) => booking.salon)
          );
          this.bookingsCount = result[1][0].visits;
          this.totalSpending = result[1][0].spending;
          this.visitedSalonsCount = result[2][0].visits;
          this.average = (this.totalSpending / this.bookingsCount).toFixed(2);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  favorite(array) {
    if (array.length == 0) return null;
    var modeMap = {};
    var maxEl = array[0]._id,
      maxObj = array[0],
      maxCount = 1;
    for (var i = 0; i < array.length; i++) {
      var el = array[i]._id;
      var obj = array[i];
      if (modeMap[el] == null) modeMap[el] = 1;
      else modeMap[el]++;
      if (modeMap[el] > maxCount) {
        maxEl = el;
        maxObj = obj;
        maxCount = modeMap[el];
      }
    }
    console.log(maxObj);
    return maxObj;
  }
}
