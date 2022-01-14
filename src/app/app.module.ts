import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TimeagoModule } from "ngx-timeago";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { ManageSalonsComponent } from "./views/admin/manage-salons/manage-salons.component";
import { TableSalonsComponent } from "./components/table-salons/table-salons.component";
import { AuthService } from "./services/auth.service";
import { ManageSalonsService } from "./services/manage-salons.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./services/authConfig.interceptor";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TableClientsComponent } from "./components/table-clients/table-clients.component";
import { DropdownComponent } from "./components/dropdowns/dropdown/dropdown.component";
import { AddSalonModalComponent } from "./components/add-salon-modal/add-salon-modal.component";
import { EditSalonModalComponent } from "./components/edit-salon-modal/edit-salon-modal.component";
import { CreateSalonComponent } from "./views/create-salon/create-salon.component";
import { Error404Component } from "./views/error404/error404.component";
import { ResetPasswordComponent } from "./views/reset/reset-password/reset-password.component";
import { ResetPasswordFormComponent } from "./views/reset/reset-password-form/reset-password-form.component";
import { SalonDetailsComponent } from "./views/salon-details/salon-details.component";
import { CustomerDetailsComponent } from "./views/customer-details/customer-details.component";
import { CardStatsComponent } from "./components/card-stats/card-stats.component";
import { ManageClientsService } from "./services/manage-clients.service";
import { MailerServiceService } from "./services/mailer-service.service";
import { BookingService } from "./services/booking.service";
import { TableBookingsComponent } from "./components/table-bookings/table-bookings.component";
import { TableHairdressersComponent } from "./components/table-hairdressers/table-hairdressers.component";
import { TableFormulasComponent } from "./components/table-formulas/table-formulas.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagesDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    HeaderStatsComponent,
    AdminNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    ManageSalonsComponent,
    TableSalonsComponent,
    TableClientsComponent,
    TableBookingsComponent,
    TableHairdressersComponent,
    TableFormulasComponent,
    DropdownComponent,
    AddSalonModalComponent,
    EditSalonModalComponent,
    CreateSalonComponent,
    Error404Component,
    ResetPasswordComponent,
    ResetPasswordFormComponent,
    SalonDetailsComponent,
    CustomerDetailsComponent,
    CardStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TimeagoModule.forRoot(),
  ],
  providers: [
    AuthService,
    ManageSalonsService,
    ManageClientsService,
    MailerServiceService,
    BookingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
