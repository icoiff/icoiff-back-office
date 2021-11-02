import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { AuthGuard } from "./services/auth.guard";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { ManageSaloonsComponent } from "./views/admin/manage-saloons/manage-saloons.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { CreateSaloonComponent } from "./views/create-saloon/create-saloon.component";
import { Error404Component } from "./views/error404/error404.component";

// no layouts views
import { ProfileComponent } from "./views/profile/profile.component";

const routes: Routes = [
  {
    path:"create/saloon",
    component: CreateSaloonComponent
  },
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
      { path: "clients", component: DashboardComponent, canActivate: [AuthGuard] },
      { path: "saloons", component: ManageSaloonsComponent, canActivate: [AuthGuard] },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  {
    path: 'error-404',
    component: Error404Component
  },
  {path: '**', redirectTo: 'error-404', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
