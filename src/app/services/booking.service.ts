import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  endpoint: string = environment.apiUrl;
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {}
  getBookingsByCustomer(_id: string) {
    return this.http.get<any>(`${this.endpoint}/booking/customer/${_id}`);
  }
  getBookingsBySalon(_id: string) {
    return this.http.get<any>(`${this.endpoint}/booking/salon/${_id}`);
  }

  /**
   * Replaced in getTotalVisitsAndSpendingByCustomer
   */
  // getBookingsByCustomerCount(_id: string) {
  //   return this.http.get<any>(`${this.endpoint}/booking/customer/count/${_id}`);
  // }

  /**
   * Replaced in getTotalVisitsAndRevenueBySalon
   */
  // getBookingsBySalonCount(_id: string) {
  //   return this.http.get<any>(`${this.endpoint}/booking/salon/count/${_id}`);
  // }

  getVisitedSalonsByCustomerCount(_id: string) {
    return this.http.get<any>(
      `${this.endpoint}/booking/customer/visits/${_id}`
    );
  }
  getTotalVisitsAndSpendingByCustomer(_id: string) {
    return this.http.get<any>(
      `${this.endpoint}/booking/customer/spending/${_id}`
    );
  }
  getCustomersBySalonCount(_id: string) {
    return this.http.get<any>(
      `${this.endpoint}/booking/salon/customers/${_id}`
    );
  }
  getTotalVisitsAndRevenueBySalon(_id: string) {
    return this.http.get<any>(`${this.endpoint}/booking/salon/revenue/${_id}`);
  }

  getHairdresserBookingsBySalon(_id: string) {
    return this.http.get<any>(
      `${this.endpoint}/booking/salon/hairdresser/${_id}`
    );
  }

  getFormulaBookingsBySalon(_id: string) {
    return this.http.get<any>(`${this.endpoint}/booking/salon/formulas/${_id}`);
  }
}
